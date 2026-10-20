import { useMemo, type CSSProperties } from 'react';

interface EmbersProps {
  count: number;
}

// Deterministic pseudo-random so the layout is stable across renders.
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** CSS-driven floating ember particles (GPU-friendly transforms only). */
export function Embers({ count }: EmbersProps) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(seeded(i, 1) * 100).toFixed(2)}%`,
        size: `${(2 + seeded(i, 2) * 4).toFixed(1)}px`,
        dur: `${(6 + seeded(i, 3) * 7).toFixed(2)}s`,
        delay: `${(seeded(i, 4) * 8).toFixed(2)}s`,
        drift: `${((seeded(i, 5) - 0.5) * 160).toFixed(0)}px`,
      })),
    [count],
  );

  if (count === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              left: e.left,
              '--size': e.size,
              '--dur': e.dur,
              '--delay': e.delay,
              '--drift': e.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
