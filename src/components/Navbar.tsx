import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, restaurant, telHref } from '../data/restaurant';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { BrandMark } from './ui/BrandMark';

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-white/[0.06] bg-coal/80 py-2.5 backdrop-blur-xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4" aria-label="القائمة الرئيسية">
        <a href="#top" aria-label="سيد كفته — الرئيسية" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                data-active={active === link.id}
                aria-current={active === link.id ? 'page' : undefined}
                className={`link-underline text-[15px] font-bold transition-colors ${
                  active === link.id ? 'text-cream' : 'text-ash hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={telHref(restaurant.phones[0])}
            className="btn-gold !px-5 !py-2.5 !text-sm"
            aria-label={`اتصل بسيد كفته على ${restaurant.phones[0]}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">اتصل واطلب</span>
            <span className="sm:hidden">اتصل</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <motion.ul
              className="container-x flex min-h-[calc(100dvh-64px)] flex-col gap-1 pb-8 pt-6"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-3xl transition-colors ${
                      active === link.id ? 'bg-white/[0.06] text-fire' : 'text-cream hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                    <span className="font-sans text-sm text-ash/60">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-6 grid gap-3"
              >
                {restaurant.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="btn-ghost w-full !justify-between">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                      اتصل
                    </span>
                    <span dir="ltr" className="font-bold tracking-wider">
                      {p}
                    </span>
                  </a>
                ))}
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
