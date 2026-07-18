import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Keram Travel | Journeys, thoughtfully curated", template: "%s | Keram Travel" },
  description: "Premium, personally curated journeys from Saudi Arabia to remarkable destinations.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", title: "Keram Travel", description: "Journeys, thoughtfully curated.", images: [{ url: "/og.png", width: 1536, height: 918, alt: "Keram Travel — سافر، وكل تفصيلة محسوبة." }] },
  twitter: { card: "summary_large_image", title: "Keram Travel", description: "Journeys, thoughtfully curated.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
