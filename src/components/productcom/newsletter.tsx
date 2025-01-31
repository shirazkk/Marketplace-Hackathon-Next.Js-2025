import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import client from "@/sanity/lib/client";
import { ProductsType } from "../../../types";

export default async function NewsletterAndInstagram() {
  const query = `*[_type == "products" && "instagram" in tags] {
    _id,
    title,
    slug,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{
      _id,
      title
    },
    description,
    inventory,
    tags 
}
`;
  const fetchInstagramProducts = await client.fetch(query);
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
              className="text-black px-4 py-2 focus:outline-none   hover:scale-105 duration-300 ease-in-out cursor-pointer"
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
            {fetchInstagramProducts.map((index: ProductsType) => (
              <div
                key={index.slug.current}
                className="overflow-hidden hover:scale-105 duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  src={index.imageUrl}
                  alt={index.title}
                  width={300}
                  height={300}
              
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
