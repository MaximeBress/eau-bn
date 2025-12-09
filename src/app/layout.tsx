import { PrismicPreview } from "@prismicio/next";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";
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
  children: React.ReactNode;
}>) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <html lang="fr">
      <body className={`${quicksand.className} text-slate-800`}>
        <Header navigation={navigation} />
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
