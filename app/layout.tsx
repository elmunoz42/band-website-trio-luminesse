import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Trio Luminesse | Soulful Music for Every Occasion",
  description:
    "A Santa Barbara jazz pop soul trio blending Brazilian rhythms with intimate singer-songwriter storytelling.",
  openGraph: {
    title: "Trio Luminesse",
    description: "Soulful music for weddings, gatherings, and community events.",
    images: ["/images/trio-luminesse-live-hero.jpeg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GWT6H6LM1B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GWT6H6LM1B');
          `}
        </Script>
      </body>
    </html>
  );
}
