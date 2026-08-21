import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PageContainer from './PageContainer'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'
import logo from '@/assets/logo/emeritus-logo-transparent.png'

const links = [
  { to: '/products', label: 'Products' },
  { to: '/farms', label: 'Our Farms' },
  { to: '/about', label: 'About' },
  { to: '/markets', label: 'Markets' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-warm-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_1px_0_0_rgba(11,61,32,0.1)]' : ''
        }`}
      >
        <PageContainer>
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'py-3' : 'py-5'
            }`}
          >
            <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Emeritus Foods & Commodities home">
              <img src={logo} alt="Emeritus Foods & Commodities" className="h-12 w-auto md:h-14" />
            </Link>

            <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? 'text-forest' : 'text-body hover:text-forest'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button to="/quote" variant="primary">
                Request a Quote
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col items-end gap-1.5 p-2 -mr-2"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block h-[1.5px] w-6 bg-deep" />
              <span className="block h-[1.5px] w-4 bg-deep" />
            </button>
          </div>
        </PageContainer>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  )
}
