import Image from "next/image";

const CompanyLogos = () => {
  const images = [
    { name: "logo1", src: "/homepage/logo1.png" },
    { name: "logo2", src: "/homepage/logo2.png" },
    { name: "logo3", src: "/homepage/logo3.png" },
    { name: "logo4", src: "/homepage/logo4.png" },
    { name: "logo5", src: "/homepage/logo5.png" },
    { name: "logo6", src: "/homepage/logo6.png" },
    { name: "logo7", src: "/homepage/logo7.png" },
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto">
      <div className="w-[77%] mt-8 mx-auto flex flex-wrap justify-center md:justify-between gap-8">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.name}
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
