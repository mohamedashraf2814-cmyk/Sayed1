import { Flame } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, id }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-1.5 text-sm font-bold text-gold">
        <Flame className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 id={id} className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-px w-12 bg-gradient-to-l from-gold/70 to-transparent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-ember" />
        <span className="h-px w-12 bg-gradient-to-r from-gold/70 to-transparent" />
      </div>
      {subtitle && <p className="mt-5 text-lg leading-relaxed text-ash sm:text-xl">{subtitle}</p>}
    </Reveal>
  );
}
