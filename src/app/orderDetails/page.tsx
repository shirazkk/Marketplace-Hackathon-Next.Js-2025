"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import client from "@/sanity/lib/client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Package2Icon, TruckIcon } from "lucide-react";

const OrderDetailsPage = () => {
  const { cartDetails, totalPrice } = useShoppingCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const calculatedTotalPrice = Object.values(cartDetails ?? {}).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cartItems = Object.values(cartDetails || {}).map((product) => ({
        _type: "reference",
        _ref: product.id,
      }));

      const orderData = {
        _type: "order",
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        email: customerInfo.email,
        phone: customerInfo.phone,
        address: customerInfo.address,
        city: customerInfo.city,
        zipCode: customerInfo.zipCode,
        cartItems,
        total: totalPrice,
        discount: 0,
        orderDate: new Date().toISOString(),
        status: "pending",
      };

      const response = await client.create(orderData);
      console.log("Order placed successfully:", response);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Customer Information Form */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
              <CardDescription>
                Complete your order details below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TruckIcon className="w-5 h-5 text-muted-foreground" />
                    <h3 className="font-semibold">Shipping Information</h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleChange}
                      required
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleChange}
                        required
                        placeholder="New York"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={customerInfo.zipCode}
                        onChange={handleChange}
                        required
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package2Icon className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[320px] pr-4">
                  {Object.values(cartDetails || {}).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 py-4 first:pt-0"
                    >
                      <Image
                        src={product.image || "/placeholder.jpg"}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                      <p className="font-medium whitespace-nowrap">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </ScrollArea>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${calculatedTotalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-lg">
                      ${calculatedTotalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6"
                  size="lg"
                  disabled={loading}
                  onClick={handleCheckout}
                >
                  {loading ? "Processing..." : "Complete Order"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
