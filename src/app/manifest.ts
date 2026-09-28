import type { MetadataRoute } from "next";
import { doctor, seo } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: doctor.name,
    short_name: doctor.shortName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffeb",
    theme_color: "#1a1a1a",
    lang: "pt-BR",
  };
}
