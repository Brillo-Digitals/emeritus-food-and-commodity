import FarmHero from '@/components/farms/FarmHero'
import FarmStory from '@/components/farms/FarmStory'
import FarmProcess from '@/components/farms/FarmProcess'
import FarmGallery from '@/components/farms/FarmGallery'
import QuoteCTA from '@/components/home/QuoteCTA'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

export default function Farms() {
  useDocumentMeta(
    'Our Farms | Emeritus Foods & Commodities',
    'Where the Emeritus story starts: our farms across Nigeria growing crops and raising poultry, livestock and fish.'
  )

  return (
    <>
      <FarmHero />
      <FarmStory />
      <FarmProcess />
      <FarmGallery />
      <QuoteCTA />
    </>
  )
}
