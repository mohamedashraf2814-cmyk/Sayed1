/**
 * Food photography from Unsplash and Pexels (free licenses).
 * Every ID below was checked against its photo page. If one ever fails to load,
 * <SafeImage> shows an on-brand fallback instead of a broken image.
 *
 * To use the restaurant's own photos: drop them in /public/images and replace
 * the URL with e.g. '/images/kofta.jpg'.
 */
const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

const pexels = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  // Meat grilling over glowing charcoal
  hero: unsplash('photo-1601625618329-caea6f7d6fd6', 1920),

  // المشويات
  kebab: unsplash('photo-1603360946369-dc9bb6258143'), // grilled meat skewers with pita
  kofta: pexels(32986492), // kofta kebabs
  tarab: pexels(32986489), // mixed grill platter
  lambKofta: pexels(14774999), // grilled kebabs on a plate
  lambChops: unsplash('photo-1766589152485-9aafd9812a19'), // grilled lamb chops
  steak: unsplash('photo-1614119068601-483274e9dcb7'), // steak over a flaming charcoal grill

  // الحواوشي
  hawawshi: pexels(5191844), // grilled meat-stuffed pita (arayes)
  hawawshiLiver: pexels(28241718), // golden meat-filled bread slices
  hawawshiCheese: pexels(28241717), // grilled stuffed bread

  // الفراخ والطيور
  chicken: unsplash('photo-1712579733874-c3a79f0f9d12'), // whole chicken on the grill
  liver: pexels(5191833), // Middle Eastern liver dish
  pigeon: unsplash('photo-1641873933980-fcff60026f50'), // small roasted bird

  // Gallery / sections
  galleryGrill: unsplash('photo-1508615263227-c5d58c1e5821', 1200), // tongs, grilled meat, fire
  galleryCoal: unsplash('photo-1776766237026-47ced47d3779', 1200), // skewers over open flame
  galleryKebab: unsplash('photo-1603360946369-dc9bb6258143', 1000),
  gallerySkewers: pexels(32986492, 1000),
  galleryBread: pexels(5191844, 1000),
  galleryPlatter: pexels(32986489, 1000),
};
