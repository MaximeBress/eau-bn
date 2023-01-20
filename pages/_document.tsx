import { Html, Head, Main, NextScript } from 'next/document';
import { PrismicLink } from '@prismicio/react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} EAU BN. <PrismicLink href="/mentions-legales" className="hover:underline">Mentions légales</PrismicLink></span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href={process.env.FACEBOOK_URL} target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </footer>
    </Html>
  );
}
