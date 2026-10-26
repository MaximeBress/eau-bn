import { Metadata } from "next";

import { ErrorView } from "@/components/ErrorView";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <ErrorView
      code="404"
      title="Cette page a pris l’eau…"
      text="La page que vous cherchez n’existe pas ou a été déplacée. Revenez à l’accueil ou découvrez nos réalisations."
      actions={
        <>
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/realisations" variant="outline">
            Nos réalisations
          </ButtonLink>
        </>
      }
    />
  );
}
