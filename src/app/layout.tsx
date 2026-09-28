import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { doctor, seo, SITE_URL } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
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
  themeColor: "#F7F5F2",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${instrument.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-ivory font-sans text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
