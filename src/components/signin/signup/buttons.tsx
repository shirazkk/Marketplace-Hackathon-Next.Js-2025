import React from "react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

const SignInButtons = () => {
  return (
    <div className="flex items-center justify-center">
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="bg-white px-3 text-black text-base font-semibold hover:bg-hover flex items-center gap-2">
            <UserIcon size={18} />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
              userButtonPopoverCard: "shadow-lg border border-gray-200",
              userButtonTrigger: "rounded-full hover:opacity-80 transition-opacity"
            }
          }}
        />
      </SignedIn>
    </div>
  );
};

export default SignInButtons;
