# سيد كفته — موقع المطعم

صفحة هبوط عربية (RTL) لمطعم **سيد كفته** — مشويات مصرية على الفحم، إدارة أبو أحمد.

## التقنيات

- React 18 + Vite + TypeScript
- Tailwind CSS
- Framer Motion (الحركات)
- Lucide React (الأيقونات)

## التشغيل محلياً

```bash
npm install
npm run dev
```

ثم افتح الرابط اللي هيظهر (غالباً `http://localhost:5173`).

للنسخة النهائية:

```bash
npm run build
npm run preview
```

## هيكل المشروع

```
src/
├── App.tsx
├── main.tsx
├── index.css                  # الألوان، الأزرار، تأثيرات النار والجمر
├── data/
│   ├── menu.ts                # المنيو والأسعار والتصنيفات
│   ├── restaurant.ts          # الاسم، العنوان، الأرقام، روابط التنقل
│   └── images.ts              # روابط الصور
├── hooks/
│   ├── useActiveSection.ts    # تحديد القسم الحالي في النافبار
│   ├── useReducedEffects.ts   # تقليل التأثيرات للأجهزة الضعيفة / reduced motion
│   └── useScrolled.ts
└── components/
    ├── Navbar.tsx             # نافبار ثابت + قائمة موبايل
    ├── hero/Hero.tsx          # الواجهة الرئيسية (بارالاكس، دخان، جمر)
    ├── hero/Embers.tsx
    ├── menu/MenuSection.tsx   # المنيو + الفلاتر
    ├── menu/MenuCard.tsx
    ├── WhyUs.tsx
    ├── Gallery.tsx
    ├── Contact.tsx
    ├── FinalCta.tsx
    ├── Footer.tsx
    ├── FloatingActions.tsx    # شريط الاتصال للموبايل + زر الرجوع لأعلى
    └── ui/                    # BrandMark, SafeImage, Reveal, SectionHeading
```

## التعديل

- **الأسعار والأصناف:** `src/data/menu.ts`
- **العنوان والأرقام:** `src/data/restaurant.ts`
- **الصور:** `src/data/images.ts` — صور حقيقية للأكلات من Unsplash و Pexels (مجانية). لو أي صورة فشلت في التحميل بيظهر بديل بتصميم المطعم بدل صورة مكسورة. يُفضل استبدالها بصور حقيقية من المطعم في `public/` (مثلاً `/images/kofta.jpg`).

## ملاحظات

- زر واتساب مش مضاف لأن مش معروف أي رقم عليه واتساب. لإضافته: `https://wa.me/20XXXXXXXXXX` (الرقم من غير الصفر الأول).
- لم تتم إضافة مواعيد عمل أو حسابات سوشيال ميديا أو دليفري — ضيفها لما تتأكد منها.
- الحركات بتحترم إعداد `prefers-reduced-motion`، والجمر والدخان بيقلوا على الأجهزة الضعيفة.
