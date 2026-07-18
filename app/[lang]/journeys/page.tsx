import { notFound } from "next/navigation";
import { Header, JourneyCards } from "../../components";
import { isLocale } from "../../data";

export default async function Journeys({ params }: { params: Promise<{ lang: string }> }) { const { lang } = await params; if (!isLocale(lang)) notFound(); return <main><div className="inner-hero"><Header lang={lang}/><div><p className="eyebrow">{lang === "ar" ? "مجموعة الرحلات" : "The journey collection"}</p><h1>{lang === "ar" ? "رحلات بُنيت حولك." : "Journeys built around you."}</h1><p>{lang === "ar" ? "هذه نماذج ملهمة. كل رحلة قابلة للتخصيص وفق وقتك واهتماماتك." : "These are starting points. Every journey can be shaped around your time and interests."}</p></div></div><section className="section"><JourneyCards lang={lang}/></section></main>; }
