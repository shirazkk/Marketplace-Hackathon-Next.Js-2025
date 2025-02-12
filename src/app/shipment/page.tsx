"use client";
import { useState } from "react";
import { Truck, Package, Download, MapPin, AlertCircle } from "lucide-react";
import { Rate, trackingObjType } from "../../../types";

function Shipment() {
  const [rates, setRates] = useState<Rate[] | null>(null);
  const [rateId, setRateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch shipping rates
  const ShipingRates = async () => {
    setLoading(true);
    setError([]);
    setRates(null);

    try {
      const response = await fetch("/api/shipengine/get-rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shipToAddress: {
            name: "Michael Smith",
            phone: "+1 555 987 6543",
            addressLine1: "456 Oak Avenue",
            cityLocality: "Los Angeles",
            stateProvince: "CA",
            postalCode: "90001",
            countryCode: "US",
          },
          packages: [
            {
              weight: { value: 5, unit: "ounce" },
              dimensions: { length: 10, width: 15, height: 3, unit: "inch" },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Rates Data:", data);
      setRates(data.rateResponse.rates || []);
    } catch (error) {
      setError(["An unknown error occurred"]);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Create a shipping label
  const CreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
      return;
    }
    setLoading(true);
    setError([]);
    try {
      const response = await fetch("/api/shipengine/label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rateId }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const labelData = await response.json();
      console.log("Label Data:", labelData);

      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      setError(["An error occurred while creating the label."]);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Truck className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Shipping Dashboard
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <h2 className="text-sm font-medium text-gray-600">Shipping To</h2>
              <p className="text-gray-900">Michael Smith</p>
              <p className="text-gray-600 text-sm">
                456 Oak Avenue, Los Angeles, CA 90001
              </p>
            </div>
          </div>

          <button
            onClick={ShipingRates}
            disabled={loading}
            className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition-all
              ${
                loading
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
              }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                Fetching Rates...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Get Shipping Rates
              </span>
            )}
          </button>
        </div>

        {error.length > 0 && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            {error.map((err, index) => (
              <div key={index} className="flex items-center gap-2 text-red-700">
                <AlertCircle className="w-4 h-4" />
                <p>{err}</p>
              </div>
            ))}
          </div>
        )}

        {rates && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Available Shipping Options
            </h2>
            <div className="space-y-4">
              {rates.map((rate, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all cursor-pointer
                    ${
                      rateId === rate.rateId
                        ? "border-blue-200 bg-blue-50 shadow-sm"
                        : "border-gray-200 hover:border-blue-200 hover:shadow-sm"
                    }`}
                  onClick={() => setRateId(rate.rateId)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {rate.carrierFriendlyName}
                        </h3>
                        {rate.trackable && (
                          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                            Trackable
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-1">
                        {rate.serviceType}
                      </p>
                      <p className="text-lg font-semibold text-blue-600">
                        ${rate.shippingAmount.amount}{" "}
                        {rate.shippingAmount.currency}
                      </p>
                      {rate.warningMessages &&
                        rate.warningMessages.length > 0 && (
                          <p className="mt-2 text-sm text-yellow-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {rate.warningMessages.join(", ")}
                          </p>
                        )}
                    </div>
                    <div className="flex items-center h-full">
                      <div
                        className={`w-5 h-5 rounded-full border-2 transition-all
                          ${
                            rateId === rate.rateId
                              ? "border-blue-600 bg-blue-600"
                              : "border-gray-300"
                          }`}
                      >
                        {rateId === rate.rateId && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {rateId && (
              <button
                onClick={CreateLabel}
                disabled={loading}
                className={`mt-6 w-full py-3 rounded-lg font-medium transition-all
                  ${
                    loading
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                  }`}
              >
                {loading ? "Creating Label..." : "Create Shipping Label"}
              </button>
            )}
          </div>
        )}

        {(labelPdf || trackingObj) && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Shipping Label & Tracking
            </h2>

            {labelPdf && (
              <a
                href={labelPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-6"
              >
                <Download className="w-4 h-4" />
                Download Shipping Label
              </a>
            )}

            {trackingObj && (
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Tracking Number</p>
                  <p className="font-mono text-gray-900">
                    {trackingObj.trackingNumber}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Label ID</p>
                  <p className="font-mono text-gray-900">
                    {trackingObj.labelId}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Carrier Code</p>
                  <p className="font-mono text-gray-900">
                    {trackingObj.carrierCode}
                  </p>
                </div>
                <a
                  href={`/tracking/?labelId=${trackingObj.labelId}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Track Order
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shipment;
