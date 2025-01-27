"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useWishlist } from "../wishlistcomponent/wishlistcontext";

const NavHeader = () => {
  const { cartCount } = useShoppingCart();
  const { wishlist } = useWishlist();
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Product", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/aboutus" },
    { name: "search", href: "/search" },
  ];

  return (
    <header className="py-5 px-4 border-b-2 bg-white shadow-sm">
      <div className="w-full md:w-[90%] lg:w-[70%] mx-auto flex justify-between items-center max-w-[1500px]">
        {/* Mobile Menu */}
        <div className="md:hidden block">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-black" />
            </SheetTrigger>
            <SheetContent className="" side="left">
              <nav>
                {links.map((link) => (
                  <Link
                    className="hover:scale-110 duration-300 ease-in cursor-pointer"
                    href={link.href}
                    key={link.name}
                  >
                    <p className=" py-5 text-lg font-medium hover:text-second cursor-pointer">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col sm:flex-row  gap-3 sm:items-center sm:space-x-4 ">
                <div className="space-x-4 hover:scale-105 duration-300 ease-in-out cursor-pointer">
                  <Link href="/wishlist">
                    <Button className="bg-white px-9 text-black hover:bg-hover relative">
                      Wishlist
                      <Heart
                        className="absolute left-2"
                        color="black"
                        strokeWidth={1.25}
                      />
                      <p className="bg-second w-5 h-5 rounded-full text-center absolute right-2 flex items-center justify-center">
                        {wishlist.length}
                      </p>
                    </Button>
                  </Link>
                </div>
                <div className=" space-x-4 hover:scale-105 duration-300 ease-in-out cursor-pointer">
                  <Link href="/cart">
                    <Button className="bg-white px-9 text-black hover:bg-hover relative">
                      Cart
                      <ShoppingCart
                        className="absolute left-2"
                        color="black"
                        strokeWidth={1.25}
                      />
                      <p className="bg-second w-5 h-5 rounded-full text-center absolute right-2 flex items-center justify-center">
                        {cartCount || 0}
                      </p>
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              className="hover:scale-110 duration-300 ease-in cursor-pointer"
              href={link.href}
              key={link.name}
            >
              <p className="text-fourth font-medium hover:text-second cursor-pointer">
                {link.name}
              </p>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Link
            className="hover:scale-105 duration-300 ease-in-out cursor-pointer"
            href="/contact"
          >
            <span className="text-fourth hover:text-second cursor-pointer">
              Contact:
            </span>
          </Link>
          <span className="text-black hover:text-slate-700 cursor-pointer">
            (808) 555-0111
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
