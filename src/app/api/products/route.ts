import { urlFor } from "@/sanity/lib/image";
import { fetchProducts } from "@/sanity/lib/quries";
import { NextResponse } from "next/server";

interface ProductsType {
    _id: string;
    image: string;
    name: string;
    slug: {
        current: string;
    };
    price: string;
    price_id: string;
}

export async function GET() {
    try {
        const allproductsdata = await fetchProducts();
        const products = allproductsdata.map((product: ProductsType) => ({
            _id: product._id,
            image: urlFor(product.image).url(),
            name: product.name,
            slug: product.slug.current,
            price: product.price,
            price_id: product.price_id,
        }));
        return NextResponse.json(products);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
    }
}

