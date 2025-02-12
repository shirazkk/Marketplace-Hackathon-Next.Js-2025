import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import Link from "next/link";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <div className="w-screen bg-gray-50">
      <div className="max-w-[1500px] mx-auto">
        <div className="w-full py-10 md:py-20 border-y border-gray-300 flex justify-center items-start">
          <div className="w-[95%] lg:w-[80%] md:w-[85%] flex flex-col lg:flex-row justify-between gap-10 items-start h-auto">
            {/* Logo & Social Media */}
            <div className="flex flex-col gap-5 w-full lg:w-auto items-center lg:items-start">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:scale-105 duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  src="/sofa_logo.png"
                  alt="Sofa Logo"
                  width={45}
                  height={45}
                  quality={100}
                  priority
                />
                <h1 className="text-2xl font-semibold">Comforty</h1>
              </Link>
              <p className="text-gray-600 text-center md:text-left">
                Vivamus tristique odio sit amet velit semper, <br /> eu posuere
                turpis interdum. Cras egestas purus.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3 justify-center md:justify-start mt-2">
                {[
                  {
                    Icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/shirazkk/",
                    title: "Visit our LinkedIn page",
                  },
                  {
                    Icon: FaTwitter,
                    link: "https://twitter.com/comforty",
                    title: "Follow us on Twitter",
                  },
                  {
                    Icon: RxInstagramLogo,
                    link: "https://instagram.com/comforty",
                    title: "Follow us on Instagram",
                  },
                  {
                    Icon: FaGithub,
                    link: "https://github.com/shirazkk",
                    title: "Check out our Pinterest",
                  },
                  {
                    Icon: FaYoutube,
                    link: "https://youtube.com/comforty",
                    title: "Subscribe to our YouTube channel",
                  },
                ].map(({ Icon, link, title }, index) => (
                  <Link
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 duration-300 ease-in-out cursor-pointer group relative flex items-center justify-center w-10 md:w-12 h-10 md:h-12 text-black transition-all"
                    aria-label={title}
                  >
                    <Icon className="group-hover:text-second text-xl" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-second transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category Section */}
            <div className="flex flex-col gap-3 w-full lg:w-[150px] items-center lg:items-start">
              <h1 className="uppercase text-fourth font-semibold">Category</h1>
              {[
                "Wing Chairs",
                "Desk Chairs",
                "Wooden Chairs",
                "Sofa",
                "Armchair",
                "Park Bench",
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/categories/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-black hover:scale-105 duration-300 ease-in-out cursor-pointer hover:text-second hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Support Section */}
            <div className="flex flex-col gap-3 w-full lg:w-[150px] items-center lg:items-start">
              <h1 className="uppercase text-fourth font-semibold">Support</h1>
              {[
                "Help & Support",
                "Terms & Condition",
                "Privacy Policy",
                "Help",
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/support/${item
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/&/g, "and")}`}
                  className="text-black hover:scale-105 duration-300 ease-in-out cursor-pointer hover:text-second hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Newsletter Section */}
            <Newsletter />
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full py-4 bg-gray-50">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0">
            <p className="text-fourth text-sm text-center md:text-left">
              © 2025 - Comforty - Designed & Developed by{" "}
              <span className="text-black font-semibold">Shiraz</span>
            </p>
            <Image
              src="/homepage/payment_methods.png"
              alt="Payment Methods"
              width={180}
              height={40}
              quality={100}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
