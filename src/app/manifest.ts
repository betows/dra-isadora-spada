import type { MetadataRoute } from "next";
import { doctor, seo } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: doctor.name,
    short_name: doctor.shortName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F2",
    theme_color: "#0E0E0C",
    lang: "pt-BR",
  };
}
