import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { company } from '@/data/company'

type Link = { to: string; label: string }

type Props = {
  open: boolean
  onClose: () => void
  links: Link[]
}

export default function MobileMenu({ open, onClose, links }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-deep flex flex-col lg:hidden"
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <span className="eyebrow text-soft-gold">Menu</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="text-warm-white text-3xl leading-none p-2 -mr-2"
            >
              &times;
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6 gap-2" aria-label="Mobile">
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + i * 0.035, duration: 0.28 }}
              >
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-3 text-4xl font-display ${
                      isActive ? 'text-soft-gold' : 'text-warm-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + links.length * 0.035, duration: 0.28 }}
              className="pt-6"
            >
              <NavLink
                to="/quote"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-soft-gold text-deep font-semibold px-6 py-3.5 rounded-md text-sm"
              >
                Request a Quote →
              </NavLink>
            </motion.div>
          </nav>

          <div className="px-6 pb-8 border-t border-warm-white/10 pt-6 text-warm-white/70 text-sm space-y-1">
            <p>
              <a href={company.whatsappLink} className="hover:text-warm-white transition-colors">
                {company.phone}
              </a>
            </p>
            <p>{company.email}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
