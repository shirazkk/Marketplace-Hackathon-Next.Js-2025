import client from "@/sanity/lib/client";
import { groq } from "next-sanity";


export const fetchHeroData = async () => {
  const query1 = `
    *[ _type == "hero"][0]{
  smallheading,
  title,
  image
}
    `
  const data = await client.fetch(query1)
  return data
}
export const fetchCompanyLogos = async () => {
  const query2 = `
*[_type == "compoanylogo"]{
  title,
  logos, 
  slug
}
    `
  const data = await client.fetch(query2)
  return data
}




// Fetch products based on search term
export const searchProducts = async (term: string) => {
  const query = groq`*[_type == "products" && title match $term]{
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
  }`;
  const params = { term: `${term}*` };
  return client.fetch(query, params);
};

export const fetchBlogs = async () => {
  const query = `
  *[_type == "popularblogs"] | order(order asc){
    "imageUrl": image.asset->url,
    Category,
    date,
    tittle,
    slug,
    description
  }
  `;
  const data2 = await client.fetch(query);
  // console.log(data2);
  return data2;
};


