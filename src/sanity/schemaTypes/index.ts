import { type SchemaTypeDefinition } from 'sanity'
import { HeroSection } from './herosection'
import { CompanyLogos } from './companylogos'
import { Products } from './products'
import { TopCategories } from './topcategories'
import { ExploreProducts } from './exploreproducts'
import { contactMessage } from './contactmessage'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [HeroSection, CompanyLogos, Products, TopCategories, ExploreProducts, contactMessage],
}
