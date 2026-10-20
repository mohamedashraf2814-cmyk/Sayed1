import { Flame } from 'lucide-react';
import { useState, type ImgHTMLAttributes } from 'react';

interface SafeImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  /** Text shown on the fallback artwork if the image fails to load. */
  fallbackLabel?: string;
}

/**
 * Image with a graceful, on-brand fallback (ember gradient + flame mark)
 * so a failed remote image never shows a broken placeholder.
 */
export function SafeImage({ src, alt, fallbackLabel, className = '', loading = 'lazy', ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex items-center justify-center overflow-hidden bg-char ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_100%,rgba(255,106,26,.45),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_30%_20%,rgba(220,171,76,.18),transparent_70%)]" />
        <div className="noise absolute inset-0 opacity-[0.08]" />
        <div className="relative flex flex-col items-center gap-2 text-center">
          <Flame className="h-9 w-9 text-amber drop-shadow-[0_0_12px_rgba(255,106,26,.8)]" aria-hidden="true" />
          {fallbackLabel && <span className="font-display text-xl text-cream/90">{fallbackLabel}</span>}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`${className} bg-char transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      {...rest}
    />
  );
}
