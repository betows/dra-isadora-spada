import type { Metadata, Viewport } from "next";
import { EB_Garamond, Figtree } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { doctor, seo, SITE_URL } from "@/lib/site";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-garamond",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: `%s | ${doctor.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: doctor.name,
  authors: [{ name: doctor.name, url: SITE_URL }],
  creator: doctor.name,
  publisher: doctor.name,
  category: "health",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: doctor.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Blumenau",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffeb",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${garamond.variable} ${figtree.variable} h-full antialiased`}>
      <body className="min-h-full bg-stone font-sans text-ink">
        <JsonLd />
        <div className="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
