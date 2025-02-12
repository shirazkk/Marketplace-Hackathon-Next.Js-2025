import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShoppingCart } from "lucide-react";

// Success Page Component
export default function Success() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            Payment Successful
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thank You for Your Purchase!
            </h2>
            <p className="text-gray-600 mb-4">
              Your order has been processed successfully. You will receive a
              confirmation email shortly.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <Button asChild>
              <Link href="/shipment" className="flex items-center justify-center">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Generate Tracking Number
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
