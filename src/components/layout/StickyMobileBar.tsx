import { company } from '@/data/company'
import { Link } from 'react-router-dom'

export default function StickyMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-warm-white/95 backdrop-blur border-t border-hairline pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2">
        <a
          href={company.whatsappLink}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-deep border-r border-hairline"
        >
          WhatsApp / Call
        </a>
        <Link
          to="/quote"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold bg-forest text-warm-white"
        >
          Request Quote
        </Link>
      </div>
    </div>
  )
}
