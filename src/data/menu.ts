import { images } from './images';

export type CategoryId = 'grills' | 'hawawshi' | 'poultry';
export type FilterId = 'all' | CategoryId;

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: CategoryId;
  image: string;
}

export const categoryLabels: Record<CategoryId, string> = {
  grills: 'المشويات',
  hawawshi: 'الحواوشي',
  poultry: 'الفراخ والطيور',
};

export const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'grills', label: 'مشويات' },
  { id: 'hawawshi', label: 'حواوشي' },
  { id: 'poultry', label: 'فراخ وطيور' },
];

export const menuItems: MenuItem[] = [
  { id: 'kebab', name: 'كباب', price: 750, category: 'grills', image: images.kebab },
  { id: 'kofta', name: 'كفتة', price: 300, category: 'grills', image: images.kofta },
  { id: 'tarab', name: 'طرب', price: 400, category: 'grills', image: images.tarab },
  { id: 'lamb-kofta', name: 'كفتة ضاني', price: 400, category: 'grills', image: images.lambKofta },
  { id: 'lamb-chops', name: 'ريش ضاني', price: 750, category: 'grills', image: images.lambChops },
  { id: 'steak', name: 'ستيك (Steak)', price: 750, category: 'grills', image: images.steak },

  { id: 'hawawshi-plain', name: 'حواوشي سادة', price: 30, category: 'hawawshi', image: images.hawawshi },
  {
    id: 'hawawshi-liver',
    name: 'حواوشي كبد وقوانص',
    price: 40,
    category: 'hawawshi',
    image: images.hawawshiLiver,
  },
  {
    id: 'hawawshi-cheese',
    name: 'حواوشي جبنة',
    price: 45,
    category: 'hawawshi',
    image: images.hawawshiCheese,
  },

  { id: 'chicken', name: 'فرخة', price: 280, category: 'poultry', image: images.chicken },
  { id: 'liver-gizzards', name: 'كبد وقوانص', price: 270, category: 'poultry', image: images.liver },
  { id: 'pigeon', name: 'حمام', price: 300, category: 'poultry', image: images.pigeon },
];
