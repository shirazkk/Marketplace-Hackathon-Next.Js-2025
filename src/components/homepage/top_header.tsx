import Link from "next/link";
import { CiCircleAlert } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-first text-text py-2 px-4">
      <div className="w-full md:w-[70%] mx-auto flex justify-center md:gap-0 gap-4 md:flex-row flex-col md:justify-between items-center text-sm max-w-[1500px]">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <FaCheck />
          <p className="text-center">Free shipping on all orders over $50</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <select className="bg-transparent rounded p-1 focus:outline-none cursor-pointer px-2">
            <option className="bg-black text-white" value="en">
              🇺🇸 English
            </option>
            <option className="bg-black text-white" value="ur">
              🇵🇰 اردو
            </option>
          </select>
          <div className=" cursor-pointer ">
            <Link href="/faq">Faqs</Link>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <CiCircleAlert />
            <Link href="/needhelp">Need Help</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
