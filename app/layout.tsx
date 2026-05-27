import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Trio Luminesse | Soulful Music for Every Occasion",
  description:
    "A Santa Barbara jazz pop soul trio blending Brazilian rhythms with intimate singer-songwriter storytelling.",
  openGraph: {
    title: "Trio Luminesse",
    description: "Soulful music for weddings, gatherings, and community events.",
    images: ["/images/trio-luminesse-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
