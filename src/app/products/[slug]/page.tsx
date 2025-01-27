import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductNotFound from "@/components/productnotfound";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import client from "@/sanity/lib/client";
import AddToCart from "@/components/cartcomponents/addtocart";
import AddToWishlist from "@/components/wishlistcomponent/wishlistbutton";
// import { ProductsType } from "../../../../types";

interface FeatureProductType {
  name: string;
  price: string;
  image: string;
}

const featureproducts: FeatureProductType[] = [
  {
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair7.png",
  },
  {
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair8.png",
  },
  {
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair9.png",
  },
  {
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair10.png",
  },
  {
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair6.png",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const singlePageQuery = `
    *[_type == "products" && slug.current == $slug][0]{
      _id,
      title,
      price,
      price_id,
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

  const product = await client.fetch(singlePageQuery, {
    slug: (await params).slug,
  });

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="w-screen bg-background py-10">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          {product.imageUrl ? (
            <div className="flex justify-center items-center relative w-full">
              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="intrinsic"
                width={500}
                height={500}
                quality={100}
                className="object-contain rounded-md"
              />
            </div>
          ) : (
            <p className="text-gray-500">Image not available</p>
          )}

          {/* Product Details */}
          <div className="flex flex-col gap-6 md:gap-8 w-full  lg:w-[90%] justify-center items-center md:items-start">
            <h1 className="text-center md:text-left text-5xl  md:text-6xl font-semibold">
              {product.title}
            </h1>

            <div className="flex flex-row gap-4 md:gap-8 items-center md:items-start justify-center md:justify-start">
              <Badge className="bg-second hover:bg-hover px-4 py-2 rounded-2xl text-white">
                ${product.price} USD
              </Badge>
              {product.inventory === 0 ? (
                <Badge className="bg-red-500 px-4 py-2 rounded-2xl text-white">
                  Out of Stock
                </Badge>
              ) : (
                <Badge className="bg-green-500 px-4 py-2 rounded-2xl text-white">
                  {product.inventory === 1 ? "Only 1 left!" : "In Stock"}
                </Badge>
              )}
            </div>

            <p className="text-gray-600 mt-4 md:text-left text-center">
              {product.description}
            </p>

            <div className="flex gap-5 flex-col md:flex-row items-center justify-center">
              <AddToWishlist
                productId={product._id}
                productName={product.title}
                productImage={product.imageUrl || ""}
                productPrice={product.price}
              />
              <AddToCart
                key={product._id}
                price_id={product.price_id || ""}
                name={product.title}
                description={product.description || ""}
                price={product.price}
                currency="USD"
                image={product.imageUrl || ""}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 py-14 max-w-[1500px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Featured Products</h1>
          <Link href="/products">
            <Button
              variant="link"
              className="text-black hover:text-hover font-bold underline"
            >
              View all
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featureproducts.map((product) => (
            <div key={product.name} className="flex flex-col">
              <div className="relative flex justify-center items-center w-full h-64 object-center rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  quality={100}
                  className="w-full h-full hover:scale-105 duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-left hover:text-second text-black text-base font-medium">
                  {product.name}
                </h2>
                <p className="text-base text-button2 font-bold mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
