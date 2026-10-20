import { useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Returns whether heavy visual effects (particles, parallax, smoke) should be
 * reduced: when the user prefers reduced motion, or the device looks low-powered.
 */
export function useReducedEffects() {
  const prefersReduced = useReducedMotion();

  const lowPower = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    const fewCores = typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4;
    const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4;
    const saveData = Boolean(nav.connection?.saveData);
    return fewCores || lowMemory || saveData;
  }, []);

  return { reduceMotion: Boolean(prefersReduced), lowPower };
}
