import { MotionConfig } from 'framer-motion';
import { Contact } from './components/Contact';
import { FinalCta } from './components/FinalCta';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/hero/Hero';
import { MenuSection } from './components/menu/MenuSection';
import { Navbar } from './components/Navbar';
import { WhyUs } from './components/WhyUs';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-bold focus:text-coal"
      >
        انتقل للمنيو
      </a>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <WhyUs />
        <Gallery />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </MotionConfig>
  );
}
