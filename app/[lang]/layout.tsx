import { notFound } from "next/navigation";
import { isLocale } from "../data";

export function generateStaticParams() { return [{ lang: "ar" }, { lang: "en" }]; }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound();
  return <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>;
}
