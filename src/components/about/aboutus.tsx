import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <div className="2xl:w-[70%] xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-full mt-24 h-auto lg:h-[478px] flex flex-col lg:flex-row justify-center gap-5 items-center mx-auto max-w-[1500px] px-4">
      <div className="bg-about 2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-full h-auto lg:h-full px-6 sm:px-4 py-10 lg:py-14 flex justify-between flex-col">
        <div className="w-full lg:w-[495px] text-white space-y-4">
          <h1 className="font-semibold text-2xl lg:text-3xl">
            About Us - Comforty
          </h1>
          <p className="text-sm lg:text-base leading-relaxed">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
        </div>
        <div>
          <Button className="bg-second hover:bg-hover text-white px-4 sm:px-3 py-4 sm:py-3 mt-3 rounded-none">
            View Collection
          </Button>
        </div>
      </div>

      <div className="2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-full w-full h-[300px] lg:h-full">
        <Image
          src="/homepage/chair7.png"
          alt="About Comforty"
          width="1920"
          height="1080"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutDetails;
