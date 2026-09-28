import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { doctor, seo, SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
  themeColor: "#FFF8F3",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
