import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function NewsletterAndInstagram() {
  const instagramImages = [
    { id: 1, src: "/homepage/chair5.png", alt: "Chair 1" },
    { id: 2, src: "/homepage/chair1.png", alt: "Chair 2" },
    { id: 3, src: "/homepage/chair8.png", alt: "Chair 3" },
    { id: 4, src: "/homepage/chair7.png", alt: "Chair 4" },
    { id: 5, src: "/homepage/chair9.png", alt: "Chair 5" },
    { id: 5, src: "/homepage/chair6.png", alt: "Chair 5" },
  ];

  return (
    <div className="bg-third py-20 mt-20">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-6">
            <Input
              type="email"
              placeholder="Email Address..."
              className="px-4 py-2 w-full md:w-[70%] lg:w-[60%] border-hidden hover:border-b-2 border-black focus:outline-none focus:ring-0"
            />
            <Button
              variant="link"
              className="text-black px-4 py-2 focus:outline-none"
            >
              SUBMIT
            </Button>
          </div>
        </div>

        <div className="w-full md:w-[90%] mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            {instagramImages.map((image) => (
              <div key={image.id} className="overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
