import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { filters, menuItems, type FilterId } from '../../data/menu';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { MenuCard } from './MenuCard';

export function MenuSection() {
  const [active, setActive] = useState<FilterId>('all');

  const visible = useMemo(
    () => (active === 'all' ? menuItems : menuItems.filter((m) => m.category === active)),
    [active],
  );

  return (
    <section id="menu" aria-labelledby="menu-title" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,106,26,.12),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <SectionHeading
          id="menu-title"
          eyebrow="المنيو"
          title="منيو سيد كفته"
          subtitle="اختار أكلك المفضل.. والباقي علينا"
        />

        <Reveal className="mb-10 flex justify-center sm:mb-14">
          <LayoutGroup id="menu-filters">
            <div
              role="tablist"
              aria-label="تصنيفات المنيو"
              className="flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-xl [scrollbar-width:none]"
            >
              {filters.map((f) => {
                const isActive = f.id === active;
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="menu-grid"
                    onClick={() => setActive(f.id)}
                    className={`relative shrink-0 rounded-full px-5 py-2.5 text-[15px] font-extrabold transition-colors duration-300 sm:px-7 ${
                      isActive ? 'text-coal' : 'text-ash hover:text-cream'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-b from-[#f6cf7a] to-gold shadow-[0_8px_30px_-8px_rgba(255,140,40,.8)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{f.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <motion.div
          id="menu-grid"
          role="tabpanel"
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-ash">الأسعار بالجنيه المصري</p>
      </div>
    </section>
  );
}
