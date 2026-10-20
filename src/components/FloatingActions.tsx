import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';
import { restaurant, telHref } from '../data/restaurant';
import { useScrolled } from '../hooks/useScrolled';

/** Sticky mobile call bar + back-to-top button. */
export function FloatingActions() {
  const showTop = useScrolled(700);
  const showBar = useScrolled(300);

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollTop}
            aria-label="ارجع لأول الصفحة"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="fixed bottom-24 left-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-coal/80 text-gold shadow-glow backdrop-blur-xl md:bottom-8 md:left-8"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-coal/85 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {restaurant.phones.map((p, i) => (
                <a
                  key={p}
                  href={telHref(p)}
                  aria-label={`اتصل على ${p}`}
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-extrabold ${
                    i === 0 ? 'btn-gold !rounded-2xl !px-2 !py-3 !text-sm' : 'border border-white/10 bg-white/5 text-cream'
                  }`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span dir="ltr" className="tracking-wide">
                    {p}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
