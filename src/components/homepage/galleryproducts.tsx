import client from "@/sanity/lib/client";
import Image from "next/image";
import { ProductsType } from "../../../types";

export default async function GalleryProducts() {
  const query = `
  *[_type == "products" && "gallery" in tags] {
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
  const fetchGalleryProducts = await client.fetch(query);

  return (
    <div className="h-auto max-w-[1500px] mx-auto relative">
      <p className="absolute 2xl:block hidden -rotate-90 uppercase left-0 top-56">
        Explore new and popular styles
      </p>
      <div className="mx-auto w-[85%] h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 h-full">
          {fetchGalleryProducts.map((product: ProductsType, index: number) => (
            <div
              key={product.slug.current}
              className={`${index === 0 ? "md:col-span-2 lg:row-span-2 lg:col-span-2" : "md:col-span-1"}`}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                quality={100}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
