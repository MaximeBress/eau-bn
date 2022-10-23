import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import Image from 'next/image'
import { useState } from 'react';

import { PageProps } from 'typings';

export const Header = ({ navigation, settings }: PageProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative shadow">
      <nav className="md:container px-2 sm:px-4 py-2.5 flex items-center justify-between md:mx-auto">
        <PrismicLink href="/" className="flex items-center relative w-16 h-16 overflow-hidden">
          <Image
            src="/assets/img/logo.png"
            alt="Logo Eau BN"
            layout="fill"
            objectFit="cover"
          />
        </PrismicLink>
        <button onClick={() => setActive(!active)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Ouvrir le menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>

        <ul className="hidden items-center text-blue-500 font-semibold text-center md:flex space-x-6 ml-4">
          {navigation.data?.links.map((item: any) => (
            <li key={prismicH.asText(item.label)}  className="py-2 hover:text-orange-500">
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </li>
          ))}
          <li className="py-2 hover:text-orange-500">
            <PrismicLink href="/realisations">
              Nos Réalisations
            </PrismicLink>
          </li>
          <li className="py-2 hover:text-orange-500">
            <PrismicLink href="/contact">
              Contact
            </PrismicLink>
          </li>
        </ul>
      </nav>
      <ul className={!active ? 'hidden' : 'md:hidden absolute text-sm right-0 z-10 w-full origin-top-right p-4 mt-2 bg-gray-50 rounded-lg border border-gray-100'}>
        {navigation.data?.links.map((item: any) => (
            <li key={prismicH.asText(item.label)}  className="py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100">
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </li>
          ))}
          <li className="py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100">
            <PrismicLink href="/realisations">
              Nos Réalisations
            </PrismicLink>
          </li>
          <li className="py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100">
            <PrismicLink href="/contact">
              Contact
            </PrismicLink>
          </li>
      </ul>
    </div>
  );
};
