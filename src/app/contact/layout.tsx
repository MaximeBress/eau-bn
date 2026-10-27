import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Eau BN Piscines pour votre projet de construction, de rénovation ou d’étanchéité de piscine.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
