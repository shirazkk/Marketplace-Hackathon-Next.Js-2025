
import { shipEngine } from "@/helper/shipengine";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { shipToAddress, packages } = await req.json();
    // Validate required fields
    if (!shipToAddress || !packages) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: shipeToAddress and packages",
        }),
        { status: 400 }
      );
    }
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "John Doe",
          phone: "+1 555 123 4567",
          addressLine1: "742 Evergreen Terrace",
          addressLine2: "Apt 101",
          cityLocality: "Springfield",
          stateProvince: "IL",
          postalCode: "62701",
          countryCode: "US",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENGINE_FOURTH_COURIER || "",
        ].filter(Boolean),
      },
    });


    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error || "An unexpected error occurred." }), { status: 500 });
  }
}


