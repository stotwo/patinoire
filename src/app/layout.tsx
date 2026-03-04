import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "La Patinoire | Patinage sur glace",
    template: "%s | La Patinoire",
  },
  description:
    "La Patinoire — séances publiques, cours de patinage, anniversaires sur glace et affûtage de patins. Ouvert d'octobre à fin mars.",
  keywords: ["patinoire", "Belgique", "patinage", "glace", "anniversaire", "hockey"],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "La Patinoire",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ paddingTop: "72px" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
