import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchHeroData } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";
import { HeroData } from "../../../types";

const Hero = async () => {
  const fetchdata: HeroData = await fetchHeroData();
  return (
    <div className="w-screen">
      <div className="md:w-[95%] w-full md:flex-row flex-col lg:w-[80%] xl:w-[70%] xl:px-10 px-5 py-10 h-full rounded-b-lg bg-third mx-auto flex justify-between max-w-[1500px] items-center gap-8">
        {/* Left Side */}
        <div className="w-full md:w-[60%] flex flex-col justify-start space-y-6 md:space-y-8 text-center md:text-left">
          <p className="text-fourth uppercase text-sm md:text-base tracking-wide">
            {fetchdata.Smallheading}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {fetchdata.title}
          </h1>
          <Link href="/shop" className="flex justify-center md:justify-start">
            <Button className="bg-second hover:scale-105 duration-300 ease-in-out cursor-pointer py-6 px-7 hover:bg-hover text-white flex items-center">
              Shop Now
              <ArrowRight className="ml-2" color="white" strokeWidth={1.25} />
            </Button>
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex justify-center md:justify-end w-full md:w-[40%]">
          <Image
            src={urlFor(fetchdata.image).width(400).url()}
            alt={fetchdata.title}
            width={400}
            height={400}
            quality={100}
            className="w-[80%] md:w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
