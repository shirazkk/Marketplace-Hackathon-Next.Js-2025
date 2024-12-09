import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavHeader = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Product", href: "/products" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/aboutus" },
  ];

  return (
    <header className="py-5 px-4 border-b-2 bg-white shadow-sm">
      <div className="w-full md:w-[80%] lg:w-[70%] mx-auto flex justify-between items-center max-w-[1500px]">
        {/* Mobile Menu */}
        <div className="md:hidden block">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-black" />
            </SheetTrigger>
            <SheetContent className="space-y-8" side="left">
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
