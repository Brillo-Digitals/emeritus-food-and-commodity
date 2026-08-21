import LivingFarmDesktop from './LivingFarmDesktop'
import LivingFarmMobile from './LivingFarmMobile'
import { useMediaQuery } from '@/lib/useMediaQuery'

export default function LivingFarm() {
  // Mount only the variant that will actually be shown. Both versions run a
  // scroll-linked calculation every frame while their section is in view, so
  // keeping the hidden one mounted (even at display:none) would still cost
  // real work on lower-powered mobile devices for nothing.
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <section aria-label="How Emeritus moves products from farm to market">
      {isDesktop ? <LivingFarmDesktop /> : <LivingFarmMobile />}
    </section>
  )
}
