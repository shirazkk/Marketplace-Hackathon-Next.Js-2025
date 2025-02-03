import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductNotFound from "@/components/productnotfound";
import { Badge } from "@/components/ui/badge";
import client from "@/sanity/lib/client";
import AddToCart from "@/components/cartcomponents/addtocart";
import AddToWishlist from "@/components/wishlistcomponent/wishlistbutton";
import ReletedProducts from "@/components/shopcomponent/reletedproducts";

export default async function ProductPage({params}: {params: Promise<{ slug: string }>}) {
  try {
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

                {product.inventory > 0 ? (
                  <AddToCart
                    id={product._id}
                    key={product._id}
                    name={product.title}
                    description={product.description || ""}
                    price={product.price}
                    currency="USD"
                    image={product.imageUrl || ""}
                  />
                ) : (
                  <Button variant="secondary" disabled>
                    Out of Stock
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ReletedProducts Products */}
    
          <ReletedProducts
            categoryId={product.category._id}
            currentProductId={product._id}
          />
        
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="w-screen bg-background py-10">
        <div className="max-w-[1500px] mx-auto px-4">
          <p className="text-center text-red-500">
            An error occurred while loading the product. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
