import { Link } from 'react-router-dom'
import PageContainer from './PageContainer'
import { company } from '@/data/company'

const columns = [
  {
    heading: 'Company',
    links: [
      { to: '/products', label: 'Products' },
      { to: '/farms', label: 'Our Farms' },
      { to: '/about', label: 'About' },
      { to: '/markets', label: 'Markets' },
    ],
  },
  {
    heading: 'Get in Touch',
    links: [
      { to: '/contact', label: 'Contact' },
      { to: '/quote', label: 'Request a Quote' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-deep text-warm-white/80">
      <PageContainer className="pt-16 pb-10 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-warm-white leading-tight">
              Emeritus
              <br />
              Foods &amp; Commodities
            </p>
            <p className="eyebrow text-soft-gold mt-4">{company.tagline}</p>
            <p className="mt-5 text-sm leading-relaxed max-w-sm text-warm-white/65">
              A Nigerian farm-owned food and agricultural supply company. We grow it, we raise
              it, we supply it, directly from our farms.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold uppercase tracking-wide text-soft-gold mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-warm-white/75 hover:text-warm-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-soft-gold mb-4">
              Reach Us
            </p>
            <ul className="space-y-2 text-sm text-warm-white/75">
              <li>
                <a href={company.whatsappLink} className="hover:text-warm-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.whatsappLink} className="hover:text-warm-white transition-colors">
                  {company.whatsapp} (WhatsApp)
                </a>
              </li>
              <li>{company.email}</li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-warm-white/10 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-warm-white/50">
            &copy; {new Date().getFullYear()} Emeritus Foods &amp; Commodities. All rights reserved.
          </p>
          <p className="text-xs text-warm-white/50">Grown here. Raised here. Supplied from here.</p>
        </div>
      </PageContainer>
    </footer>
  )
}
