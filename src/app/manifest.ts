import type { MetadataRoute } from "next";
import { doctor, seo } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: doctor.name,
    short_name: doctor.shortName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F3EEE6",
    theme_color: "#12100E",
    lang: "pt-BR",
  };
}
