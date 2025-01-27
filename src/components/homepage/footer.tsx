import Image from "next/image";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen bg-gray-50">
      <div className="max-w-[1500px] mx-auto ">
        <div className="w-full py-10 md:py-20 border-y-[1px]  border-gray-300 flex justify-center items-start">
          <div className="w-[95%] lg:w-[80%] md:w-[85%] flex flex-col lg:flex-row justify-between gap-10 items-start h-auto">
            <div className="flex flex-col gap-5 w-full lg:w-auto items-center lg:items-start">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:scale-105 duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  src="/homepage/sofa_logo.png"
                  alt="sofa-logo"
                  width={45}
                  height={45}
                  quality={100}
                />
                <h1 className="text-2xl font-semibold">Comforty</h1>
              </Link>
              <p className="text-gray-600 text-center md:text-left">
                Vivamus tristique odio sit amet velit semper, <br /> eu posuere
                turpis interdum. Cras egestas purus.
              </p>
              <div className="flex gap-3 justify-center md:justify-start mt-2">
                {[
                  { Icon: FaFacebook },
                  { Icon: FaTwitter },
                  { Icon: RxInstagramLogo },
                  { Icon: FaPinterest },
                  { Icon: FaYoutube },
                ].map(({ Icon }, index) => (
                  <div
                    key={index}
                    className="hover:scale-110 duration-300 ease-in-out cursor-pointer group relative flex items-center justify-center w-10 md:w-12 h-10 md:h-12 text-black transition-all"
                  >
                    <Icon className="group-hover:text-second text-xl" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-second transition-all duration-300 cursor-pointer"></div>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Category",
                items: [
                  "Sofa",
                  "Armchair",
                  "Wing Chair",
                  "Desk Chair",
                  "Wooden Chair",
                  "Park Bench",
                ],
              },
              {
                title: "Support",
                items: [
                  "Help & Support",
                  "Terms & Condition",
                  "Privacy Policy",
                  "Help",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 w-full lg:w-[150px] items-center lg:items-start"
              >
                <h1 className="uppercase text-fourth font-semibold">
                  {section.title}
                </h1>
                {section.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-black hover:scale-105 duration-300 ease-in-out cursor-pointer hover:text-second hover:underline underline-offset-4"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}

            <div className="flex flex-col gap-3 w-full lg:w-[300px] items-center lg:items-start">
              <h1 className="uppercase text-fourth font-semibold">
                Newsletter
              </h1>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="py-5 border border-gray-300 rounded-md w-full sm:w-2/3"
                />
                <Button className="text-white py-5 px-4 rounded-md bg-second hover:bg-hover w-full sm:w-1/3 mt-2 sm:mt-0">
                  Subscribe
                </Button>
              </div>

              <p className="text-sm text-gray-600 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Nullam tincidunt erat enim.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-4 bg-gray-50">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0">
            <p className="text-fourth text-sm text-center md:text-left">
              @ 2021 - Blogy - Designed & Developed by{" "}
              <span className="text-black font-semibold">Shiraz</span>
            </p>
            <Image
              src="/homepage/payment_methods.png"
              alt="payment-methods"
              width={200}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
