import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { categoryLabels, type MenuItem } from '../../data/menu';
import { SafeImage } from '../ui/SafeImage';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export const MenuCard = forwardRef<HTMLElement, MenuCardProps>(function MenuCard({ item, index }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Glow halo */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-gold/40 via-ember/20 to-transparent opacity-0 blur-[1px] transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="glass-card relative flex h-full flex-row overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 sm:flex-col">
        <div className="relative aspect-square w-32 shrink-0 overflow-hidden sm:aspect-[4/3] sm:w-full">
          <SafeImage
            src={item.image}
            alt={item.name}
            fallbackLabel={item.name}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-transparent" />
          <span className="absolute right-3 top-3 hidden rounded-full border border-white/10 bg-coal/60 px-3 py-1 text-xs font-bold text-cream/90 backdrop-blur-md sm:inline-block">
            {categoryLabels[item.category]}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-3 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div>
            <span className="text-xs font-bold text-ash sm:hidden">{categoryLabels[item.category]}</span>
            <h3 className="font-display text-2xl leading-snug text-cream sm:text-[1.7rem]">{item.name}</h3>
          </div>
          <p
            className="inline-flex w-fit items-baseline gap-1.5 rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/15 to-ember/10 px-3.5 py-1.5 shadow-[0_0_30px_-10px_rgba(255,106,26,.7)]"
            aria-label={`السعر ${item.price} جنيه`}
          >
            <span className="font-display text-3xl leading-none text-fire">{item.price}</span>
            <span className="text-sm font-bold text-gold">جنيه</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
});
