import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const MiddleHeader = () => {
  return (
    <div className="bg-third py-4 px-4 ">
      <div className=" w-full sm:w-[70%] mx-auto flex justify-between items-center max-w-[1500px]">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <Image
            src="/homepage/sofa_logo.png"
            alt="sofa-logo"
            width={30}
            height={30}
          />
          <h1 className="text-2xl font-semibold">Comforty</h1>
        </div>

        {/* Right Side */}
        <div className=" space-x-4">
          <Link href="/cart">
            <Button className="bg-white px-9 text-black hover:bg-slate-100 relative">
              Cart
              <ShoppingCart
                className="absolute left-2"
                color="black"
                strokeWidth={1.25}
              />
              <p className="bg-second  w-5 h-5 rounded-full text-center absolute right-2">
                2
              </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
