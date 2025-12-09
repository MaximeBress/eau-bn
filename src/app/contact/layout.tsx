import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Formulaire de contact Eau BN",
  description: "Contactez Eau BN via notre formulaire de contact",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
