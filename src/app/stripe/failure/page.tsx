import React from "react";
import { XCircle, RefreshCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Failure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6">
          <div className="text-center">
            {/* Failure Icon Animation */}
            <div className="mb-4 relative">
              <div className="h-24 w-24 rounded-full bg-red-100 mx-auto flex items-center justify-center animate-[shake_.5s_ease-in-out]">
                <XCircle className="h-12 w-12 text-red-600" strokeWidth={3} />
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Failed
            </h1>
            <p className="text-gray-600 mb-8">
              {`We couldn't process your payment. Please check your payment
                details and try again. If the problem persists, contact your bank.`}
            </p>

            {/* Action Button */}
            <Link href="/cart" className="flex justify-center">
              <Button className="inline-flex items-center justify-center px-6 py-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <RefreshCcw className="h-5 w-5 mr-2" />
                Try Again
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Failure;
