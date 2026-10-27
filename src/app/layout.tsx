import { GoogleTagManager } from "@next/third-parties/google";
import { PrismicPreview } from "@prismicio/next";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/config/site";
import { repositoryName } from "@/prismicio";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Étanchéité PVC armé et rénovation de piscines`,
    template: `%s | ${site.name}`,
  },
  description:
    "Eau BN Piscines : étanchéité PVC armé, hydraulique et traitement de l’eau, construction et rénovation de piscines. Un interlocuteur unique du premier rendez-vous à la mise en eau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <GoogleTagManager gtmId={process.env.GTAG_ID ?? ""} />
      <body className="flex min-h-svh flex-col">
        <Header
          instagramUrl={site.instagramUrl}
          facebookUrl={site.facebookUrl}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
