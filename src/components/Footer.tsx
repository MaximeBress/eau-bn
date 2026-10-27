import Image from "next/image";
import Link from "next/link";

import {
  ExternalIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";
import { navigation, site } from "@/config/site";

export const Footer = () => (
  <footer className="bg-petrole-fonce text-ivoire/85">
    <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1.2fr] md:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-ivoire p-1.5">
            <Image
              src="/assets/img/logo.png"
              alt=""
              width={48}
              height={48}
              className="size-11"
            />
          </span>
          <span className="font-serif text-2xl tracking-[0.12em] text-ivoire uppercase">
            Eau BN Piscines
          </span>
        </div>
        <p className="mt-5 max-w-xs text-sm leading-relaxed">
          Notre cœur de métier, l’étanchéité. Construction, rénovation et
          accompagnement de votre projet de piscine.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ivoire/30 p-2.5 transition-colors hover:border-ivoire hover:text-ivoire"
          >
            <InstagramIcon className="size-5" />
            <span className="sr-only">Instagram</span>
          </a>
          {site.facebookUrl && (
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ivoire/30 p-2.5 transition-colors hover:border-ivoire hover:text-ivoire"
            >
              <FacebookIcon className="size-5" />
              <span className="sr-only">Facebook</span>
            </a>
          )}
        </div>
      </div>

      <nav aria-label="Pied de page">
        <p className="mb-4 font-serif text-xl text-ivoire">Navigation</p>
        <ul className="flex flex-col gap-2.5 text-sm">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ivoire">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.nuancier.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-ivoire"
            >
              {site.nuancier.label}
              <ExternalIcon className="size-3.5" />
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <p className="mb-4 font-serif text-xl text-ivoire">Contact</p>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="flex gap-3">
            <PinIcon className="mt-0.5 size-5 shrink-0" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}
            </span>
          </li>
          <li>
            <a href={site.phoneHref} className="flex gap-3 hover:text-ivoire">
              <PhoneIcon className="size-5 shrink-0" />
              {site.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="flex gap-3 break-all hover:text-ivoire"
            >
              <MailIcon className="size-5 shrink-0" />
              {site.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-ivoire/15">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-ivoire/60 sm:flex-row sm:justify-between md:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <Link href="/mentions-legales" className="hover:text-ivoire">
          Mentions légales
        </Link>
      </div>
    </div>
  </footer>
);
