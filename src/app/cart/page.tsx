"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartProducts = () => {
  const { cartCount, cartDetails, removeItem } =
    useShoppingCart();
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (cartCount !== undefined) {
      setIsLoading(false);
    }
  }, [cartCount]);

  // Calculate total price dynamically
  const calculatedTotalPrice = Object.values(cartDetails ?? {}).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRedirect = () => {
    if (cartDetails === undefined || cartCount === 0) {
      alert("Add items to cart before placing order.");
    } else {
      router.push("/orderDetails"); // Replace with the target page
    }
  };

  const handleRemoveItem = (itemId: string) => {
    setNotification(true);
    removeItem(itemId);
    setTimeout(() => setNotification(false), 2000);
  };

  const handleSizeChange = (itemId: string, size: string) => {
    // Update the selected size of the item in the cart (assuming you can update it via your cart management system)
    console.log(`Item ${itemId} size changed to: ${size}`);
    // Example: updateCartSize(itemId, size); // You would update this with the actual cart update logic.
  };

  return (
    <div className="mx-auto w-[90%] py-8 max-w-[1500px]">
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-4">
        <div className="w-full lg:w-[70%] h-auto px-4 p-4 lg:p-15 xl:p-20">
          <h1 className="font-semibold text-2xl mb-4">Your Cart</h1>
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : cartCount === 0 ? (
              <div className="flex flex-col items-center justify-center h-96">
                <Image
                  src="/emptycart.png"
                  alt="Empty Cart"
                  width={150}
                  height={150}
                  quality={100}
                  className="mb-6"
                />
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  Your cart is empty
                </h1>
                <p className="text-gray-600 mb-6">
                  Looks like you haven’t added anything to your cart yet.
                </p>
                <Button
                  className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
                  onClick={() => {
                    window.location.href = "/"; // Redirect to Home page
                  }}
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div>
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <div
                    key={entry.id}
                    className="flex md:flex-row flex-col gap-5 mt-5 w-full border-b-2 py-5"
                  >
                    <div>
                      <Image
                        src={entry.image as string}
                        alt={entry.name}
                        width={200}
                        height={200}
                        quality={100}
                        className="mx-auto md:mx-0 "
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p>{entry.name}</p>
                        <p>MRP: ${entry.price}</p>
                      </div>
                      <p className="text-fourth mt-4">{entry.description}</p>

                      {/* Size Selector */}
                      <div className="flex gap-4">
                        <div className="mt-4 space-x-2">
                          <label
                            htmlFor="size"
                            className="font-semibold text-sm"
                          >
                            Size:
                          </label>
                          <select
                            id="size"
                            onChange={(e) =>
                              handleSizeChange(entry.id, e.target.value)
                            }
                            defaultValue="medium"
                            className="mt-2 px-4 py-2 border-2 border-gray-300 rounded-md"
                          >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                          </select>
                        </div>

                        <div className="space-x-16 text-fourth mt-8">
                          <span>
                            Quantity{" "}
                            <p className="inline px-3 rounded-full py-1 bg-slate-300 text-black">
                              {entry.quantity}
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-3 entrys-center mt-8">
                        <div>
                          <Heart className="hover:scale-105 duration-300 ease-in-out cursor-pointer" />
                        </div>
                        <div
                          className="hover:scale-105 duration-300 ease-in-out cursor-pointer"
                          onClick={() => handleRemoveItem(entry.id)}
                        >
                          <MdOutlineDelete size={25} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Checkout and Summary Section */}
        <div className="w-full lg:w-[50%]  p-4 lg:p-15 xl:p-20 ">
          <div className="flex justify-center flex-col gap-4">
            <h1 className="font-semibold text-2xl mb-3">Summary</h1>
            <div className="flex justify-between w-full mb-2">
              <p>Subtotal</p>
              <p>${calculatedTotalPrice.toFixed(2) || "0.00"}</p>
            </div>
            <div className="flex justify-between w-full border-b-[1px] pb-2 mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between w-full border-b-[1px] pb-4 mb-2">
              <p>Total</p>
              <p>${calculatedTotalPrice.toFixed(2)}</p>
            </div>
            <div className="w-full mt-2 hover:scale-105 duration-300 ease-in-out cursor-pointer">
              <Button
                onClick={handleRedirect}
                className="w-full py-7 rounded-3xl cursor-pointer text-white bg-second hover:bg-hover"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {notification && (
        <div
          role="alert"
          className="py-4 px-8 fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-100 dark:bg-red-700 border-l-4 border-red-500 dark:border-red-700 text-green-900 dark:text-red-100 p-2 rounded-lg flex items-center transition-all duration-500 ease-in-out"
        >
          <p className="text-xs font-semibold">Item removed from cart</p>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
