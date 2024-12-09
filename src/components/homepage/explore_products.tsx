import Image from "next/image";

export default function ExploreProducts() {
  return (
    <div className="h-auto max-w-[1500px] mx-auto relative">
      <p className="absolute 2xl:block hidden -rotate-90 uppercase  left-0 top-56">
        Explore new and popular styles
      </p>
      <div className="mx-auto w-[85%] h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 h-full">
          <div className="md:col-span-2 lg:row-span-2 lg:col-span-2">
            <Image
              src="/homepage/image-8.png"
              alt="Placeholder"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-1">
            <Image
              src="/homepage/image-9.png"
              alt="Placeholder"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-1">
            <Image
              src="/homepage/image-6.png"
              alt="Placeholder"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-1">
            <Image
              src="/homepage/image-1.png"
              alt="Placeholder"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-1">
            <Image
              src="/homepage/image-6.png"
              alt="Placeholder"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
