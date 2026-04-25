import { HomeHeroSection } from "@/components/marketing/hero"
import { TheProblemSection } from "@/components/marketing/the-problem"
import { OurSolutionSection } from "@/components/marketing/our-solution"
import { ProductSection } from "@/components/marketing/product-section"
import { CustomSolutionsSection } from "@/components/marketing/custom-solutions"
import { CtaSection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/layout/footer"
import { products } from "@/content/products"

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <TheProblemSection />
      <OurSolutionSection />
      {products.map((product) => (
        <ProductSection key={product.name} {...product} />
      ))}
      <CustomSolutionsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
