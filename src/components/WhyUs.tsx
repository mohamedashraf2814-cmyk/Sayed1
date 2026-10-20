import { motion } from 'framer-motion';
import { Beef, Flame, Phone, Sandwich } from 'lucide-react';
import { images } from '../data/images';
import { SafeImage } from './ui/SafeImage';
import { SectionHeading } from './ui/SectionHeading';

const features = [
  {
    icon: Flame,
    title: 'على الفحم',
    text: 'مشويات متظبطة على نار الفحم، بريحة وطعم الشوي الأصيل.',
  },
  {
    icon: Beef,
    title: 'مشويات بكل أنواعها',
    text: 'كباب، كفتة، طرب، كفتة ضاني، ريش ضاني وستيك.. اختار اللي على مزاجك.',
  },
  {
    icon: Sandwich,
    title: 'حواوشي وفراخ وطيور',
    text: 'حواوشي سادة وبالكبدة والجبنة، وفراخ وكبد وقوانص وحمام.',
  },
  {
    icon: Phone,
    title: 'اطلب بمكالمة',
    text: 'كلمنا على أي رقم من أرقامنا واختار أكلك من المنيو.',
  },
];

export function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-char" />
      <div className="noise absolute inset-0 -z-10 opacity-[0.05]" aria-hidden="true" />
      <div className="container-x">
        <SectionHeading id="why-title" eyebrow="ليه سيد كفته" title="روح المشويات المصري" />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_70%,rgba(255,106,26,.28),transparent_70%)] blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] shadow-card">
              <SafeImage
                src={images.galleryGrill}
                alt="لحم بيتشوي على الفحم والنار مولعة"
                fallbackLabel="على الفحم"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-display text-3xl leading-snug text-cream sm:text-4xl">
                  الطعم الأصيل..
                  <br />
                  <span className="text-fire">على أصوله</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.ul
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {features.map(({ icon: Icon, title, text }) => (
              <motion.li
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="glass-card group p-6 transition-colors duration-500 hover:border-gold/30"
              >
                <span className="relative mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/15 to-ember/5">
                  <span className="absolute inset-0 rounded-2xl bg-ember/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  <Icon className="relative h-6 w-6 text-amber" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl text-cream">{title}</h3>
                <p className="mt-2 leading-relaxed text-ash">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
