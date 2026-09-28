import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { doctor, seo, SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
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
  themeColor: "#F4EFE8",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${greatVibes.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-cream font-sans text-ink">
        <JsonLd />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
