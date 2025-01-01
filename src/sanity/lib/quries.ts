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
export const fetchProducts = async () => {
    const query3 = `
*[_type == "product"] | order(order asc){
  image,
  name,
  slug,
  price
}
    `
    const data = await client.fetch(query3)
    return data
}


export const fetchTopProducts = async () => {
    const query4 = `
*[_type == "topproducts"]{
  image,
  productname,
  slug,
 quantityofproduct
}
    `
    const data = await client.fetch(query4)
    return data
}
export const fetchExploreProducts = async () => {
    const query5 = `
*[_type == "exploreproducts"]{
  productimg,
  title,
  slug
}
    `
    const data = await client.fetch(query5)
    return data
}


