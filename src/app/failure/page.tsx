import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ShoppingCart } from "lucide-react";

// Failure Page Component
export default function FailurePage() {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex flex-col items-center">
            <XCircle className="w-16 h-16 text-red-500 mb-4" />
            Payment Failed
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Something Went Wrong
            </h2>
            <p className="text-gray-600 mb-4">
              We were unable to process your payment. Please check your payment
              method and try again.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <Button asChild>
              <Link
                href="/checkout"
                className="flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 w-5 h-5" />
                Try Again
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Need Help?
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
