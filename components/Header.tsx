import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import Image from 'next/image'
import { useState } from 'react';

import { PageProps } from 'typings';

export const Header = ({ navigation, settings }: PageProps) => {
    const [active, setActive] = useState(false);

    return (
        <div className="relative shadow sticky top-0 z-30 bg-white">
            <nav className="md:container px-2 sm:px-4 py-2.5 flex items-center justify-between md:mx-auto">
                <PrismicLink href="/" className="flex items-center relative w-16 h-16 overflow-hidden">
                    <Image
                        src="/assets/img/logo.png"
                        alt="Logo Eau BN"
                        layout="fill"
                        objectFit="cover"
                    />
                </PrismicLink>
                <button onClick={() => setActive(!active)} type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>

                <ul className="hidden items-center text-blue-500 font-semibold text-center md:flex space-x-6 ml-4">
                    {navigation.data?.links.map((item: any) => (
                        <li key={prismicH.asText(item.label)} className="py-2 hover:text-orange-500">
                            <PrismicLink field={item.link}>
                                <PrismicText field={item.label}/>
                            </PrismicLink>
                        </li>
                    ))}
                    <li className="py-2 hover:text-orange-500">
                        <PrismicLink href="/realisations">
                            Nos Réalisations
                        </PrismicLink>
                    </li>
                    <li className="py-2">
                        <PrismicLink
                            href="/contact"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-400 hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Contactez nous
                        </PrismicLink>
                    </li>
                    <li className="py-2">
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href={process.env.FACEBOOK_URL} target="_blank"
                               className="text-blue-500 hover:text-orange-500" rel="noreferrer">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
            <ul className={!active ? 'hidden' : 'md:hidden absolute text-sm right-0 z-10 w-full origin-top-right p-4 mt-2 bg-gray-50 rounded-lg border border-gray-100'}>
                {navigation.data?.links.map((item: any) => (
                    <li key={prismicH.asText(item.label)}
                        className="py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100">
                        <PrismicLink field={item.link}>
                            <PrismicText field={item.label}/>
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
