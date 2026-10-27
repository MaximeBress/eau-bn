"use client";

import { useEffect } from "react";

import { ErrorView } from "@/components/ErrorView";
import { ButtonLink, buttonClassName } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorView
      code="500"
      title="Une erreur est survenue"
      text="Un problème technique empêche l’affichage de cette page. Réessayez dans un instant ou contactez-nous directement."
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className={buttonClassName("primary")}
          >
            Réessayer
          </button>
          <ButtonLink href="/contact" variant="outline">
            Nous contacter
          </ButtonLink>
        </>
      }
    />
  );
}
