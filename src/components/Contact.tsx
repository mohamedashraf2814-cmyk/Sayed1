import { motion, type Variants } from 'framer-motion';
import { MapPin, Navigation, Phone, UserRound } from 'lucide-react';
import { mapsHref, restaurant, telHref } from '../data/restaurant';
import { SectionHeading } from './ui/SectionHeading';

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-char" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(255,106,26,.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container-x">
        <SectionHeading
          id="contact-title"
          eyebrow="تواصل معانا"
          title="تعالى أو كلمنا"
          subtitle="عنواننا وأرقامنا قدامك.. اتصل واطلب على طول"
        />

        <motion.div
          className="grid gap-4 sm:gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Address */}
          <motion.address
            variants={card}
            className="glass-card relative flex flex-col overflow-hidden p-7 not-italic sm:p-8 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ember/15 blur-3xl" aria-hidden="true" />
            <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10">
              <MapPin className="h-6 w-6 text-amber" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-bold text-gold">العنوان</h3>
            <p className="mt-2 font-display text-3xl leading-snug text-cream sm:text-4xl">{restaurant.address}</p>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <Navigation className="h-5 w-5" aria-hidden="true" />
                افتح على الخريطة
              </a>
              <span className="flex items-center gap-2 text-sm text-ash">
                <UserRound className="h-4 w-4 text-gold" aria-hidden="true" />
                {restaurant.management}
              </span>
            </div>
          </motion.address>

          {/* Phones */}
          <motion.div variants={card} className="glass-card flex flex-col gap-4 p-7 sm:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10">
              <Phone className="h-6 w-6 text-amber" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-bold text-gold">أرقام التليفون</h3>
            <ul className="flex flex-col gap-3">
              {restaurant.phones.map((p) => (
                <li key={p}>
                  <a
                    href={telHref(p)}
                    aria-label={`اتصل على ${p}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-gold/50 hover:bg-gold/[0.07]"
                  >
                    <span dir="ltr" className="font-display text-2xl tracking-wider text-cream">
                      {p}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-b from-[#f6cf7a] to-gold text-coal transition-transform duration-300 group-hover:scale-110">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
