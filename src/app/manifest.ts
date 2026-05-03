import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sosialisasi Sensus Ekonomi 2026",
    short_name: "SE2026",
    description:
      "Landing page informasi Sosialisasi Sensus Ekonomi 2026 BPS Kabupaten Kepulauan Anambas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e37f2a",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
