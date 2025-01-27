import CompanyLogos from "@/components/homepage/company_logo";
import FeatureProducts from "@/components/homepage/feature_products";
import Hero from "@/components/homepage/hero";
import GalleryProducts from "@/components/homepage/galleryproducts";
import Categories from "@/components/homepage/categories";

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
