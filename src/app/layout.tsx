import { GoogleTagManager } from "@next/third-parties/google";
import { PrismicPreview } from "@prismicio/next";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Eau BN",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <html lang="fr">
      <GoogleTagManager gtmId={process.env.GTAG_ID ?? ""} />
      <body className={`${quicksand.className} text-slate-800`}>
        <Header
          navigation={navigation}
          facebookUrl={process.env.FACEBOOK_URL}
        />
        <main>{children}</main>
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
