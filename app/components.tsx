"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { copy, journeys, type Locale } from "./data";

export function Header({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return <header className="site-header"><Link className="brand" href={`/${lang}`} aria-label="Keram Travel home"><span>KERAM</span><small>TRAVEL</small></Link><nav aria-label="Primary navigation"><Link href={`/${lang}/journeys`}>{c.nav[0]}</Link><Link href={`/${lang}#destinations`}>{c.nav[1]}</Link><Link href={`/${lang}/about`}>{c.nav[2]}</Link><Link href={`/${lang}/contact`}>{c.nav[3]}</Link></nav><Link className="lang" href={`/${lang === "ar" ? "en" : "ar"}`} hrefLang={lang === "ar" ? "en" : "ar"}>{lang === "ar" ? "EN" : "العربية"}</Link></header>;
}

export function JourneyCards({ lang, limit }: { lang: Locale; limit?: number }) {
  const c = copy[lang];
  return <div className="journey-grid">{journeys.slice(0, limit).map((item, index) => <article className={`journey-card card-${index + 1}`} key={item.slug}><div className="card-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 42%, rgba(7,18,27,.82)), url('${item.image}')` }}><span>{item.tag[lang]}</span><div><p>{item.place[lang]}</p><h3>{item.title[lang]}</h3></div></div><div className="card-meta"><span>{item.days} {lang === "ar" ? "أيام" : "days"}</span><span>{c.from} <b>{new Intl.NumberFormat(lang === "ar" ? "ar-SA" : "en-SA").format(item.price)} ر.س</b> {c.per}</span></div><Link className="text-link" href={`/${lang}/journeys/${item.slug}`}>{c.view} <span aria-hidden="true">↗</span></Link></article>)}</div>;
}

export function EnquiryForm({ lang }: { lang: Locale }) {
  const c = copy[lang]; const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStatus(lang === "ar" ? "جارٍ الإرسال…" : "Sending…"); const form = new FormData(event.currentTarget); const response = await fetch("/api/enquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) }); setStatus(response.ok ? (lang === "ar" ? "وصل طلبك. سنتواصل معك قريباً." : "Your request is in. We’ll be in touch soon.") : (lang === "ar" ? "تعذّر الإرسال حالياً. تواصل معنا عبر واتساب." : "We couldn’t send that yet. Please use WhatsApp.")); }
  return <form className="enquiry-form" onSubmit={submit}><label>{c.name}<input name="name" required minLength={2} autoComplete="name" /></label><label>{c.phone}<input name="phone" required inputMode="tel" autoComplete="tel" /></label><label className="wide">{c.destination}<input name="destination" required /></label><input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" /><input type="hidden" name="locale" value={lang} /><button type="submit">{c.submit}<span aria-hidden="true">↗</span></button><p className="form-status" role="status">{status}</p></form>;
}
