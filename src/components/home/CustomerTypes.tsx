import { Link } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { markets } from '@/data/markets'

export default function CustomerTypes() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Who We Supply</SectionLabel>
            <SectionHeading className="mt-4">
              From our farms to your table, business or market.
            </SectionHeading>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs hidden lg:block">
              Six kinds of customers, one supply relationship: tell us what you need and we
              work out how to get it to you.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-deep/15">
              {markets.map((m, i) => (
                <div key={m.id} className="group border-b border-deep/15 py-6 md:py-7">
                  <Link to="/markets" className="flex items-start gap-4 md:gap-8">
                    <span className="font-display text-lg text-gold shrink-0 w-8 pt-0.5">
                      0{i + 1}
                    </span>
                    <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-baseline md:gap-8">
                      <h3 className="font-display text-xl md:text-2xl text-deep md:w-56 shrink-0">
                        {m.label}
                      </h3>
                      <p className="mt-1.5 md:mt-0 text-sm text-muted leading-relaxed max-w-md">
                        {m.supply}
                      </p>
                    </div>
                    <span className="hidden md:block shrink-0 text-forest self-center transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
