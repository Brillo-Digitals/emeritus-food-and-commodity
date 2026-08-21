import Hero from '@/components/home/Hero'
import ProductCategories from '@/components/home/ProductCategories'
import FarmStory from '@/components/home/FarmStory'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import LivingFarm from '@/components/home/LivingFarm'
import CustomerTypes from '@/components/home/CustomerTypes'
import WhyEmeritus from '@/components/home/WhyEmeritus'
import TrustSection from '@/components/home/TrustSection'
import QuoteCTA from '@/components/home/QuoteCTA'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

export default function Home() {
  useDocumentMeta(
    'Emeritus Foods & Commodities | From Farm to Market',
    'Emeritus Foods & Commodities grows, raises and supplies food, livestock, fish and agricultural produce directly from our farms in Nigeria.'
  )

  return (
    <>
      <Hero />
      <ProductCategories />
      <FarmStory />
      <FeaturedProducts />
      <LivingFarm />
      <CustomerTypes />
      <WhyEmeritus />
      <TrustSection />
      <QuoteCTA />
    </>
  )
}
