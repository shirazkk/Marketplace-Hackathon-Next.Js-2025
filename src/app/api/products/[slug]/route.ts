import client from "@/sanity/lib/client";
import { NextResponse } from "next/server";



export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> },
) {
    try {
        const singleProduct = `
    *[_type == "product" && slug.current == $slug][0]{
      name,
      price,
     "imageUrl": image.asset->url,
      description
    }
    `;
        const product = await client.fetch(singleProduct, {
            slug: (await params).slug
        });

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product);
    }
    catch (error) {
        return NextResponse.json({ message: "An error occurred",error }, { status: 500 });
    }

}