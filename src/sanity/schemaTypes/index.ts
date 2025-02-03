import { type SchemaTypeDefinition } from 'sanity'
import { HeroSection } from './herosection'
import { CompanyLogos } from './companylogos'
import { productSchema } from './products'
import { contactMessage } from './contactmessage'
import { categorySchema } from './categories'
import { PopularBlogs } from './blogs'
import { newsletterSchema } from './newsletter'
import order from './order'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [HeroSection, CompanyLogos, productSchema, categorySchema, contactMessage, PopularBlogs, newsletterSchema, order]
}
