export const restaurant = {
  name: 'سيد كفته',
  management: 'إدارة أبو أحمد',
  address: '٢ شارع المدينة المنورة، أمام مخزن الأنابيب، بشتيل.',
  phones: ['01029422463', '01126671005'] as const,
};

export const telHref = (phone: string) => `tel:${phone}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '٢ شارع المدينة المنورة، أمام مخزن الأنابيب، بشتيل',
)}`;

export const navLinks = [
  { id: 'top', label: 'الرئيسية' },
  { id: 'menu', label: 'المنيو' },
  { id: 'why', label: 'ليه سيد كفته' },
  { id: 'gallery', label: 'معرض الصور' },
  { id: 'contact', label: 'تواصل معانا' },
] as const;
