import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StickyMobileBar from '@/components/layout/StickyMobileBar'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/ProductDetail'
import Farms from '@/pages/Farms'
import About from '@/pages/About'
import Markets from '@/pages/Markets'
import Contact from '@/pages/Contact'
import Quote from '@/pages/Quote'
import NotFound from '@/pages/NotFound'

// Quiet global route transition. Deliberately understated: the page should
// feel available almost immediately, not like it is loading.
function RoutedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RoutedPage><Home /></RoutedPage>} />
        <Route path="/products" element={<RoutedPage><Products /></RoutedPage>} />
        <Route path="/products/:slug" element={<RoutedPage><ProductDetail /></RoutedPage>} />
        <Route path="/farms" element={<RoutedPage><Farms /></RoutedPage>} />
        <Route path="/about" element={<RoutedPage><About /></RoutedPage>} />
        <Route path="/markets" element={<RoutedPage><Markets /></RoutedPage>} />
        <Route path="/contact" element={<RoutedPage><Contact /></RoutedPage>} />
        <Route path="/quote" element={<RoutedPage><Quote /></RoutedPage>} />
        <Route path="*" element={<RoutedPage><NotFound /></RoutedPage>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation in the app
    // respect prefers-reduced-motion automatically (mostly disabling
    // transforms while keeping opacity), rather than only relying on the
    // CSS media query, which does not touch JS-driven motion.
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pb-16 lg:pb-0">
            <AnimatedRoutes />
          </main>
          <Footer />
          <StickyMobileBar />
        </div>
      </BrowserRouter>
    </MotionConfig>
  )
}
