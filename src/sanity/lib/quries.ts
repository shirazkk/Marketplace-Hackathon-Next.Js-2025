import client from "@/sanity/lib/client";

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


