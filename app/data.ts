export type Locale = "ar" | "en";

export const copy = {
  en: {
    dir: "ltr", nav: ["Journeys", "Destinations", "About", "Contact"],
    heroEyebrow: "Curated in Riyadh · Made for you", heroTitle: "Travel, with every detail considered.",
    heroBody: "Distinctive escapes, thoughtfully shaped around how you want to feel—not just where you want to go.",
    explore: "Explore journeys", plan: "Plan with a specialist", featured: "A few places worth pausing for",
    featuredBody: "Handpicked stays, considered pacing and the kind of details that turn a trip into a story.",
    from: "From", per: "per person", view: "View journey", why: "Why travel with Keram?",
    promise: ["One dedicated travel specialist", "Clear inclusions, no vague surprises", "Support before, during and after"],
    ctaTitle: "Tell us where your mind is wandering.", ctaBody: "Share a few details. We’ll return with a considered first proposal—usually within one business day.",
    name: "Full name", phone: "Phone or WhatsApp", destination: "Where would you like to go?", submit: "Start planning",
    note: "No payment is collected. Prices shown are indicative and subject to availability.", all: "All journeys",
  },
  ar: {
    dir: "rtl", nav: ["الرحلات", "الوجهات", "عن كِرام", "تواصل معنا"],
    heroEyebrow: "ننسّقها في الرياض · ونصنعها لأجلك", heroTitle: "سافر، وكل تفصيلة محسوبة.",
    heroBody: "رحلات استثنائية مصممة بعناية حول الشعور الذي تبحث عنه، لا الوجهة وحدها.",
    explore: "استكشف الرحلات", plan: "خطّط مع خبير سفر", featured: "أماكن تستحق أن تتأنّى لأجلها",
    featuredBody: "إقامات مختارة، وإيقاع مريح، وتفاصيل صغيرة تحوّل الرحلة إلى حكاية.",
    from: "ابتداءً من", per: "للشخص", view: "عرض الرحلة", why: "لماذا تسافر مع كِرام؟",
    promise: ["خبير سفر واحد يتابع رحلتك", "تفاصيل واضحة دون مفاجآت", "دعم قبل الرحلة وأثناءها وبعدها"],
    ctaTitle: "أخبرنا إلى أين يأخذك خيالك.", ctaBody: "شاركنا بعض التفاصيل، وسنعود إليك بمقترح أولي مدروس، غالباً خلال يوم عمل واحد.",
    name: "الاسم الكامل", phone: "رقم الجوال أو واتساب", destination: "إلى أين ترغب بالسفر؟", submit: "ابدأ التخطيط",
    note: "لا يتم تحصيل أي دفعة. الأسعار المعروضة استرشادية وتخضع للتوفر.", all: "كل الرحلات",
  },
} as const;

export const journeys = [
  { slug: "alula-after-dark", place: { en: "AlUla, Saudi Arabia", ar: "العلا، السعودية" }, title: { en: "AlUla after dark", ar: "العلا بعد الغروب" }, days: 4, price: 4250, tag: { en: "Culture & stillness", ar: "ثقافة وسكينة" }, image: "https://images.unsplash.com/photo-1609151712779-4f86b3de7308?auto=format&fit=crop&q=82&w=1800" },
  { slug: "maldives-unhurried", place: { en: "North Malé Atoll", ar: "شمال ماليه" }, title: { en: "The Maldives, unhurried", ar: "المالديف على مهل" }, days: 6, price: 11800, tag: { en: "Barefoot luxury", ar: "رفاهية بلا تكلّف" }, image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=82&w=1800" },
  { slug: "istanbul-between-shores", place: { en: "Istanbul, Türkiye", ar: "إسطنبول، تركيا" }, title: { en: "Istanbul between shores", ar: "إسطنبول بين ضفتين" }, days: 5, price: 6100, tag: { en: "City & cuisine", ar: "مدينة ومذاق" }, image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&q=82&w=1800" },
] as const;

export function isLocale(value: string): value is Locale { return value === "ar" || value === "en"; }
