const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export const images = {
  hero: unsplash('photo-1529193591184-b1d58069ecdd', 1920),
  kebab: unsplash('photo-1603360946369-dc9bb6258143'),
  kofta: unsplash('photo-1529006557810-274b9b2fc783'),
  tarab: unsplash('photo-1544025162-d76694265947'),
  lambKofta: unsplash('photo-1555939594-58d7cb561ad1'),
  lambChops: unsplash('photo-1514516345957-556ca7d90a29'),
  steak: unsplash('photo-1600891964092-4316c288032e'),
  hawawshi: unsplash('photo-1561651823-34feb02250e4'),
  hawawshiLiver: unsplash('photo-1550547660-d9450f859349'),
  hawawshiCheese: unsplash('photo-1571091718767-18b5b1457add'),
  chicken: unsplash('photo-1598103442097-8b74394b95c6'),
  liver: unsplash('photo-1432139555190-58524dae6a55'),
  pigeon: unsplash('photo-1532550907401-a500c9a57435'),
  galleryGrill: unsplash('photo-1558030006-450675393462', 1200),
  gallerySkewers: unsplash('photo-1555939594-58d7cb561ad1', 1000),
  galleryPlatter: unsplash('photo-1544025162-d76694265947', 1000),
  galleryKebab: unsplash('photo-1603360946369-dc9bb6258143', 1000),
  galleryCoal: unsplash('photo-1529193591184-b1d58069ecdd', 1000),
  galleryBread: unsplash('photo-1561651823-34feb02250e4', 1000),
};
