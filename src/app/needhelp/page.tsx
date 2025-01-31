import React, { ReactNode } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Package,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

// Define the type for the ReturnsPolicyCard component
type ReturnsPolicyCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const ReturnsPolicyCard = ({
  title,
  children,
  className = "",
}: ReturnsPolicyCardProps) => (
  <div className={`bg-white rounded-lg shadow-md p-6 mb-6 ${className}`}>
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
      {title}
    </h2>
    {children}
  </div>
);

// Define the state and types for the ReturnsPolicy component
type ReturnsPolicyState = {
  lastUpdated: string;
  returnWindow: string;
  refundTimeframe: string;
};

const ReturnsPolicy = () => {
  const { lastUpdated, returnWindow, refundTimeframe }: ReturnsPolicyState = {
    lastUpdated: "January 28, 2025",
    returnWindow: "30 days",
    refundTimeframe: "5-10 business days",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Returns & Refunds Policy
          </h1>
          <p className="text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Introduction Card */}
        <ReturnsPolicyCard title="Our Promise">
          <div className="flex items-start gap-4">
            <Package className="w-6 h-6 text-second mt-1" />
            <p className="text-gray-700">
              At <span className="font-semibold">Comforty</span>`&apos;` we want
              you to be completely satisfied with your purchase. If for any
              reason you`&apos;`re not happy with your product`&apos;` we offer
              Link hassle-free return process.
            </p>
          </div>
        </ReturnsPolicyCard>

        {/* Eligibility Card */}
        <ReturnsPolicyCard title="Eligibility for Returns">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-second" />
              <p className="text-gray-700">
                Returns accepted within {returnWindow} of delivery
              </p>
            </div>
            <ul className="list-none space-y-3 pl-7">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-second mt-2 flex-shrink-0" />
                <span>Products must be unused and in original packaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-second mt-2 flex-shrink-0" />
                <span>Proof of purchase required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-second mt-2 flex-shrink-0" />
                <span>
                  Customized items only returnable if damaged/defective
                </span>
              </li>
            </ul>
          </div>
        </ReturnsPolicyCard>

        {/* Non-Returnable Items Card */}
        <ReturnsPolicyCard title="Non-Returnable Items">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-orange-500 mt-1" />
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Gift cards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Clearance items</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Items marked as Non-Returnable</span>
              </li>
            </ul>
          </div>
        </ReturnsPolicyCard>

        {/* Return Process Card */}
        <ReturnsPolicyCard title="Return Process">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <RefreshCw className="w-6 h-6 text-second mt-1" />
              <div className="space-y-3">
                <ol className="list-decimal pl-4 space-y-3">
                  <li>
                    Contact our support team to request return authorization
                  </li>
                  <li>
                    Pack item securely in original packaging with all
                    accessories
                  </li>
                  <li>
                    Ship to provided return address (shipping costs apply unless
                    item is defective)
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </ReturnsPolicyCard>

        {/* Refund Policy Card */}
        <ReturnsPolicyCard title="Refund Policy">
          <div className="space-y-4 text-gray-700">
            <p>
              After inspection`&apos;` refunds will be processed within{" "}
              {refundTimeframe} to your original payment method.
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-second" />
                <span>Gift card purchases refunded as store credit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-second" />
                <span>Shipping charges only refunded for our errors</span>
              </li>
            </ul>
          </div>
        </ReturnsPolicyCard>

        {/* Contact Section */}
        <ReturnsPolicyCard
          title="Contact Us"
          className="bg-gray-800 text-white"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-second" />
              <Link
                href="mailto:support@furniro.com"
                className="hover:text-second"
              >
                support@comforty.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-second" />
              <span className="hover:text-second cursor-pointer">
                +1 (123) 456-7890
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-second" />
              <span className="hover:text-second cursor-pointer">
                123 Comforty Lane`&apos;` FC 12345
              </span>
            </div>
          </div>
        </ReturnsPolicyCard>
      </div>
    </div>
  );
};

export default ReturnsPolicy;
