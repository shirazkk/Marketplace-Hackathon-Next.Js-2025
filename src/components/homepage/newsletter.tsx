"use client"; // Required for state and API calls in Next.js

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Function to handle subscription
  const handleSubscribe = async () => {
    if (!email) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Reset email input after success
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };
  setTimeout(() => {
    setStatus(null);
  }, 3000);

  return (
    <div className="flex flex-col gap-3 w-full lg:w-[300px] items-center lg:items-start">
      <h1 className="uppercase text-fourth font-semibold">Newsletter</h1>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
        <Input
          type="email"
          placeholder="Enter your email"
          className="py-4 border border-gray-300 rounded-md w-full sm:w-2/3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={handleSubscribe}
          className="text-white py-4 px-4 rounded-md bg-second hover:bg-hover w-full sm:w-1/3"
        >
          Subscribe
        </Button>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">
          ✔ Successfully subscribed!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">
          ❌ Please enter a valid email.
        </p>
      )}

      <p className="text-sm text-gray-600 text-center md:text-left">
        Subscribe to receive exclusive deals and furniture updates!
      </p>
    </div>
  );
};

export default Newsletter;
