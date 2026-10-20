import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { restaurant, telHref } from '../data/restaurant';
import { Reveal } from './ui/Reveal';

export function FinalCta() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="cta-title" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-b from-soot to-coal px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="fire-glow pointer-events-none absolute inset-x-0 bottom-0 h-3/4 origin-bottom opacity-80" aria-hidden="true" />
            <div className="noise pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 id="cta-title" className="font-display text-4xl leading-tight text-cream sm:text-6xl lg:text-7xl">
                نفسك في <span className="text-fire">مشويات مظبوطة؟</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80 sm:text-xl">
                اتصل بينا واختار أكلك من منيو سيد كفته
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.a
                  href={telHref(restaurant.phones[0])}
                  className="btn-gold px-10 py-4 text-xl"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="h-6 w-6" aria-hidden="true" />
                  اتصل دلوقتي
                </motion.a>
                <a href={telHref(restaurant.phones[1])} className="btn-ghost" aria-label={`أو اتصل على ${restaurant.phones[1]}`}>
                  <span className="text-ash">أو</span>
                  <span dir="ltr" className="font-bold tracking-wider">
                    {restaurant.phones[1]}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
