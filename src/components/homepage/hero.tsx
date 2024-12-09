import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-screen">
      <div className="md:w-[95%] w-full md:flex-row flex-col lg:w-[80%] xl:w-[70%] xl:px-10 px-5 py-10 h-full rounded-b-lg bg-third mx-auto flex justify-between max-w-[1500px] items-center gap-8">
        {/* Left Side */}
        <div className="w-full md:w-[60%] flex flex-col justify-start space-y-6 md:space-y-8 text-center md:text-left">
          <p className="text-fourth uppercase text-sm md:text-base tracking-wide">
            Welcome to Chairy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="flex justify-center md:justify-start">
            <Button className="bg-second py-4 px-6 hover:bg-hover text-white flex items-center">
              Shop Now
              <ArrowRight className="ml-2" color="white" strokeWidth={1.25} />
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end w-full md:w-[40%]">
          <Image
            src="/homepage/hero.png"
            alt="hero_image"
            width={400}
            height={400}
            className="w-[80%] md:w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
