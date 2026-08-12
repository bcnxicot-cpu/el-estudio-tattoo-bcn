import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://el-estudio-tattoo-bcn.vercel.app"),
  title: "El Estudio Tattoo | Fine line y tattoo custom en Barcelona",
  description:
    "Fine line, minimal y tattoo custom en el centro de Barcelona. Cuéntanos tu idea y encuentra la artista que mejor encaja contigo.",
  openGraph: {
    title: "El Estudio Tattoo — Barcelona",
    description: "No hace falta que traigas el dibujo perfecto. Trae la idea.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
