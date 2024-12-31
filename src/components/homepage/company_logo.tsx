import { urlFor } from "@/sanity/lib/image";
import { fetchCompanyLogos } from "@/sanity/lib/quries";
import Image from "next/image";

interface LogoType {
  title: string;
  logos: string;
  slug: {
    current: string;
  };
}

const CompanyLogos = async () => {
  const fectchData = await fetchCompanyLogos();
  return (
    <div className="w-full max-w-[1500px] mx-auto">
      <div className="w-[77%] mt-8 mx-auto flex flex-wrap justify-center md:justify-between gap-8">
        {fectchData.map((image: LogoType) => (
          <Image
            key={image.slug.current}
            src={urlFor(image.logos).url()}
            alt={image.title}
            width={80}
            height={80}
            className="object-contain hover:scale-110 duration-300 ease-in-out cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
