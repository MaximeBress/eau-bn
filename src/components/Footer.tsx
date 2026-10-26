import { PrismicLink } from "@prismicio/react";

export const Footer = () => (
  <footer className="shadow">
    <div className="flex items-center justify-center gap-8 bg-gray-100 px-4 py-8">
      <h3 className="pb-0">Pour toute information</h3>
      <PrismicLink
        href="/contact"
        className="rounded-lg bg-linear-to-br from-pink-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:from-pink-400 hover:to-orange-400 hover:text-white focus:ring-4 focus:ring-pink-200 focus:outline-none"
      >
        Contactez nous
      </PrismicLink>
    </div>
    <div className="flex items-center justify-between bg-blue-800 p-4 text-white sm:p-6">
      <div className="flex gap-4">
        <span>© {new Date().getFullYear()} EAU BN.</span>
        <PrismicLink
          href="/mentions-legales"
          className="text-white hover:underline"
        >
          Mentions légales
        </PrismicLink>
      </div>
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <a
          href={process.env.FACEBOOK_URL}
          target="_blank"
          className="text-white hover:text-orange-500"
          rel="noreferrer"
        >
          <svg
            className="h-5 w-5"
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
    </div>
  </footer>
);
