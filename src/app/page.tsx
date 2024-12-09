import CompanyLogos from "@/components/homepage/company_logo";
import ExploreProducts from "@/components/homepage/explore_products";
import FeatureProducts from "@/components/homepage/feature_products";
import Hero from "@/components/homepage/hero";
import OurProducts from "@/components/homepage/our_products";
import TopCategories from "@/components/homepage/top_categories";

export default function Home() {
  return (
    <div>
      <Hero />
      <CompanyLogos />
      <FeatureProducts />
      <TopCategories />
      *<ExploreProducts />
      <OurProducts />
    </div>
  );
}
