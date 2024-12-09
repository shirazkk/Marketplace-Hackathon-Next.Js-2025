import Image from "next/image";

export default function ExploreProducts() {
  const images = [
    {
      id: 1,
      src: "/homepage/image_8.png",
      alt: "Placeholder",
      colSpan: "md:col-span-2 lg:row-span-2 lg:col-span-2",
    },
    {
      id: 2,
      src: "/homepage/image_9.png",
      alt: "Placeholder",
      colSpan: "md:col-span-1",
    },
    {
      id: 3,
      src: "/homepage/image_6.png",
      alt: "Placeholder",
      colSpan: "md:col-span-1",
    },
    {
      id: 4,
      src: "/homepage/image_1.png",
      alt: "Placeholder",
      colSpan: "md:col-span-1",
    },
    {
      id: 5,
      src: "/homepage/image_6.png",
      alt: "Placeholder",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <div className="h-auto max-w-[1500px] mx-auto relative">
      <p className="absolute 2xl:block hidden -rotate-90 uppercase left-0 top-56">
        Explore new and popular styles
      </p>
      <div className="mx-auto w-[85%] h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 h-full">
          {images.map((image) => (
            <div key={image.id} className={image.colSpan}>
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
