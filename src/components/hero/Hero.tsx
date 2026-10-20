import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Phone, UtensilsCrossed } from 'lucide-react';
import { useRef } from 'react';
import { images } from '../../data/images';
import { restaurant, telHref } from '../../data/restaurant';
import { useReducedEffects } from '../../hooks/useReducedEffects';
import { BrandMark } from '../ui/BrandMark';
import { SafeImage } from '../ui/SafeImage';
import { Embers } from './Embers';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const headlineWords = ['الطعم', 'الأصيل..', 'على', 'أصوله'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion, lowPower } = useReducedEffects();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const parallax = !reduceMotion;
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', parallax ? '22%' : '0%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, parallax ? 1.2 : 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', parallax ? '35%' : '0%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const emberCount = reduceMotion ? 0 : lowPower ? 10 : 28;

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY, scale: bgScale }}>
        <SafeImage
          src={images.hero}
          alt="مشويات على الفحم المشتعل"
          loading="eager"
          className="h-full w-full object-cover"
          fallbackLabel=""
        />
      </motion.div>

      {/* Overlays for readability + cinematic grading */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-coal/80 via-coal/55 to-coal" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_50%_40%,transparent_0%,rgba(11,9,7,.75)_80%)]" />
      <div className="fire-glow absolute inset-x-0 bottom-0 -z-10 h-[55%] origin-bottom" />
      {!lowPower && !reduceMotion && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <span className="smoke left-[5%] top-[30%] h-[45vh] w-[45vh]" />
          <span className="smoke right-[10%] top-[15%] h-[55vh] w-[55vh] [animation-delay:-6s]" />
          <span className="smoke bottom-[10%] left-[40%] h-[40vh] w-[40vh] [animation-delay:-11s]" />
        </div>
      )}
      <div className="noise pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" aria-hidden="true" />
      <Embers count={emberCount} />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative flex flex-col items-center pb-24 pt-32 text-center sm:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease }}
          className="mb-8"
        >
          <BrandMark size="lg" />
        </motion.div>

        <h1
          id="hero-title"
          className="font-display text-[3.4rem] leading-[1.15] text-cream drop-shadow-[0_6px_30px_rgba(0,0,0,.6)] sm:text-7xl lg:text-8xl"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              className={`inline-block ${i >= 2 ? 'text-fire' : ''}`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 60, rotateX: 50, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.45 + i * 0.14, ease }}
            >
              {word}
              {i < headlineWords.length - 1 && ' '}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-2xl"
        >
          مشويات متظبطة على الفحم، وطعم يخليك ترجع تاني
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <motion.a
            href="#menu"
            className="btn-gold w-full text-lg sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    boxShadow: [
                      '0 0 0 1px rgba(255,220,150,.4) inset, 0 12px 40px -12px rgba(255,140,40,.6)',
                      '0 0 0 1px rgba(255,220,150,.5) inset, 0 16px 60px -8px rgba(255,140,40,.95)',
                      '0 0 0 1px rgba(255,220,150,.4) inset, 0 12px 40px -12px rgba(255,140,40,.6)',
                    ],
                  }
            }
            transition={{
              default: { duration: 0.25 },
              boxShadow: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
            شوف المنيو
          </motion.a>
          <motion.a
            href={telHref(restaurant.phones[0])}
            className="btn-ghost w-full text-lg sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
            اطلب بالتليفون
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#menu"
        aria-label="انزل للمنيو"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold text-ash md:bottom-8 md:flex"
      >
        <span className="flex h-11 w-7 justify-center rounded-full border border-cream/30 pt-2">
          <span className="h-2 w-1 rounded-full bg-gold motion-safe:animate-[scroll-dot_1.8s_ease-in-out_infinite]" />
        </span>
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
