import { MapPin, Phone, UserRound } from 'lucide-react';
import { mapsHref, navLinks, restaurant, telHref } from '../data/restaurant';
import { BrandMark } from './ui/BrandMark';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-coal pb-28 pt-16 md:pb-10">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BrandMark />
          <p className="mt-5 max-w-sm leading-relaxed text-ash">مشويات متظبطة على الفحم، وطعم يخليك ترجع تاني.</p>
          <p className="mt-4 flex items-center gap-2 text-cream/90">
            <UserRound className="h-4 w-4 text-gold" aria-hidden="true" />
            {restaurant.management}
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <h2 className="mb-4 font-display text-xl text-cream">روابط سريعة</h2>
          <ul className="grid gap-2.5">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="link-underline text-ash transition-colors hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-display text-xl text-cream">تواصل</h2>
          <ul className="grid gap-3 text-ash">
            <li>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cream">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{restaurant.address}</span>
              </a>
            </li>
            {restaurant.phones.map((p) => (
              <li key={p}>
                <a href={telHref(p)} className="flex items-center gap-2 hover:text-cream">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span dir="ltr" className="font-bold tracking-wider">
                    {p}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 border-t border-white/[0.06] pt-6 text-center text-sm text-ash/80">
        © {year} سيد كفته — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
