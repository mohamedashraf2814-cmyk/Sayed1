import { Flame } from 'lucide-react';

interface BrandMarkProps {
  size?: 'sm' | 'lg';
}

/** Typographic logo: "سيد كفته" with a flame emblem. */
export function BrandMark({ size = 'sm' }: BrandMarkProps) {
  const large = size === 'lg';
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`relative grid place-items-center rounded-2xl border border-gold/40 bg-gradient-to-b from-soot to-coal ${
          large ? 'h-16 w-16' : 'h-10 w-10'
        }`}
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_100%,rgba(255,106,26,.45),transparent_65%)]" />
        <Flame className={`relative text-amber ${large ? 'h-8 w-8' : 'h-5 w-5'}`} strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-fire ${large ? 'text-5xl' : 'text-2xl'}`}>سيد كفته</span>
        <span className={`mt-1 font-semibold tracking-wide text-ash ${large ? 'text-sm' : 'text-[11px]'}`}>
          مشويات على الفحم
        </span>
      </span>
    </span>
  );
}
