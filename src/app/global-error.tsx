"use client";

import "./globals.css";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="fr">
      <body className="flex min-h-svh items-center justify-center p-6">
        <div className="max-w-md text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-petrole uppercase">
            Eau BN Piscines
          </p>
          <h1 className="font-serif text-4xl">Une erreur est survenue</h1>
          <p className="mt-4 leading-relaxed">
            Le site est momentanément indisponible. Réessayez dans un instant.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-md bg-petrole px-6 py-3.5 text-sm font-medium text-white hover:bg-petrole-fonce"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
