import React from "react";
import { Check, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6">
          <div className="text-center">
            {/* Success Icon Animation */}
            <div className="mb-4 relative">
              <div className="h-24 w-24 rounded-full bg-green-100 mx-auto flex items-center justify-center animate-[bounce_1s_ease-in-out]">
                <Check className="h-12 w-12 text-green-600" strokeWidth={3} />
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600 mb-8">
              {`We've received your payment and your order is now being processed.
              You'll receive a confirmation email shortly.`}
            </p>

            {/* Single Action Button */}
            <Link href="/products" className="flex justify-center">
              <Button className="inline-flex items-center justify-center px-6 py-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;
