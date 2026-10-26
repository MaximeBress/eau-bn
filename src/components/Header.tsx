"use client";

import { PrismicLink, PrismicText } from "@prismicio/react";
import Image from "next/image";
import { useState } from "react";
import { Content, PrismicDocument } from "@prismicio/client";

export const Header = ({
  navigation,
  facebookUrl,
}: {
  navigation: PrismicDocument;
  facebookUrl?: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative sticky top-0 z-30 bg-white shadow">
      <nav className="flex items-center justify-between px-2 py-2.5 sm:px-4 md:container md:mx-auto">
        <PrismicLink
          href="/"
          className="relative flex h-16 w-16 items-center overflow-hidden"
        >
          <Image
            src="/assets/img/logo.png"
            alt="Logo Eau BN"
            layout="fill"
            objectFit="cover"
          />
        </PrismicLink>
        <button
          onClick={() => setActive(!active)}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <ul className="ml-4 hidden items-center space-x-6 text-center font-semibold text-blue-500 md:flex">
          {navigation.data?.links.map(
            (item: Content.NavigationDocumentDataLinksItem) => (
              <li key={item.label} className="py-2 hover:text-orange-500">
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ),
          )}
          <li className="py-2 hover:text-orange-500">
            <PrismicLink href="/realisations">Nos Réalisations</PrismicLink>
          </li>
          <li className="py-2">
            <PrismicLink
              href="/contact"
              className="rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:from-pink-400 hover:to-orange-400 hover:text-white focus:ring-4 focus:ring-pink-200 focus:outline-none"
            >
              Contactez nous
            </PrismicLink>
          </li>
          <li className="py-2">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a
                href={facebookUrl}
                target="_blank"
                className="text-blue-500 hover:text-orange-500"
                rel="noreferrer"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <ul
        className={
          !active
            ? "hidden"
            : "absolute right-0 z-10 mt-2 w-full origin-top-right rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm md:hidden"
        }
      >
        {navigation.data?.links.map(
          (item: Content.NavigationDocumentDataLinksItem) => (
            <li
              key={item.label}
              className="rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100"
            >
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </li>
          ),
        )}
        <li className="rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100">
          <PrismicLink href="/realisations">Nos Réalisations</PrismicLink>
        </li>
        <li className="rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100">
          <PrismicLink href="/contact">Contact</PrismicLink>
        </li>
      </ul>
    </div>
  );
};
