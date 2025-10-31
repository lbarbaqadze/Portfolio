import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lasha Barbakadze | Portfolio",
  description: "Explore my web development projects and CV.",
  openGraph: {
    title: "Lasha Barbaqadze | Portfolio",
    description: "Explore my web development projects and CV.",
    url: "https://lbarbaqadze.github.io/Portfolio/",
    siteName: "Lasha Barbakadze Portfolio",
    images: [
      {
        url: "https://lbarbaqadze.github.io/Portfolio/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
