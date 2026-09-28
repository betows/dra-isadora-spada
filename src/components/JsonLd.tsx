import { doctor, faqs, links, seo, SITE_URL } from "@/lib/site";

export function JsonLd() {
  const physician = {
    "@context": "https://schema.org",
    "@type": ["Physician", "Dentist", "LocalBusiness"],
    "@id": `${SITE_URL}/#physician`,
    name: doctor.name,
    alternateName: ["Dra. Isadora Spada", "Isadora Mór Spada"],
    description: seo.description,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    identifier: doctor.cro,
    medicalSpecialty: "Orofacial Harmonization",
    knowsAbout: [
      "Harmonização facial",
      "Toxina botulínica",
      "Preenchimento com ácido hialurônico",
      "Método LipSense",
      "Mentoria Ilumme",
      "SynFace",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Blumenau",
      containedInPlace: {
        "@type": "State",
        name: "Santa Catarina",
      },
    },
    sameAs: [links.instagram],
    priceRange: "$$",
    currenciesAccepted: "BRL",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Procedimentos e mentoria",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Harmonização facial em Blumenau",
            areaServed: "Blumenau",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Botox em Blumenau",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preenchimento facial",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mentoria Ilumme",
          },
        },
      ],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: doctor.name,
    url: SITE_URL,
    inLanguage: "pt-BR",
    description: seo.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
