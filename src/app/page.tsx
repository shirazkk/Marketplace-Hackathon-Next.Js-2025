import Categories from "@/components/homecomponents/categories";
import CompanyLogos from "@/components/homecomponents/company_logo";
import FeatureProducts from "@/components/homecomponents/feature_products";
import GalleryProducts from "@/components/homecomponents/galleryproducts";
import Hero from "@/components/homecomponents/hero";


export default function Home() {
  return (
    <div>
      <Hero />
      <CompanyLogos />
      <FeatureProducts />
      <Categories />
      <GalleryProducts />
    </div>
  );
}
