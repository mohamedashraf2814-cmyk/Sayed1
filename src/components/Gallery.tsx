import { motion } from 'framer-motion';
import { images } from '../data/images';
import { SafeImage } from './ui/SafeImage';
import { SectionHeading } from './ui/SectionHeading';

const shots = [
  { src: images.galleryCoal, alt: 'أسياخ مشويات على الفحم', label: 'على الفحم', span: 'col-span-2 row-span-2' },
  { src: images.galleryKebab, alt: 'أسياخ كباب مشوية', label: 'كباب', span: 'col-span-1 row-span-1' },
  { src: images.gallerySkewers, alt: 'كفتة مشوية على السيخ', label: 'كفتة', span: 'col-span-1 row-span-1' },
  { src: images.galleryBread, alt: 'حواوشي سخن', label: 'حواوشي', span: 'col-span-1 row-span-1' },
  { src: images.galleryPlatter, alt: 'طبق مشويات مشكل', label: 'مشويات', span: 'col-span-1 row-span-1' },
  { src: images.galleryGrill, alt: 'لحمة على الشواية والنار', label: 'نار الشوي', span: 'col-span-2 row-span-1' },
];

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="gallery-title"
          eyebrow="معرض الصور"
          title="من على الفحم.. لعينك"
          subtitle="لقطات من روح المشويات"
        />

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-4">
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.label}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] ${shot.span}`}
            >
              <SafeImage
                src={shot.src}
                alt={shot.alt}
                fallbackLabel={shot.label}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/85 via-coal/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-coal/55 px-4 py-1.5 font-display text-lg text-cream backdrop-blur-md sm:bottom-5 sm:right-5 sm:text-xl">
                {shot.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
