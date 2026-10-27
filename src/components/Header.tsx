"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  CloseIcon,
  ExternalIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
} from "@/components/icons";
import { navigation, site } from "@/config/site";

export const Logo = ({ className }: { className?: string }) => (
  <Link
    href="/"
    className={clsx("flex items-center gap-2.5 sm:gap-3", className)}
    aria-label={`${site.name} — accueil`}
  >
    <Image
      src="/assets/img/logo.png"
      alt=""
      width={56}
      height={56}
      priority
      className="size-11 md:size-14"
    />
    <span className="flex flex-col leading-none">
      <span className="font-serif text-lg tracking-[0.08em] whitespace-nowrap text-anthracite uppercase sm:text-xl sm:tracking-[0.12em] md:text-2xl lg:text-xl xl:text-2xl">
        Eau BN Piscines
      </span>
      <span className="mt-1 hidden text-[0.65rem] tracking-[0.3em] whitespace-nowrap text-petrole/80 uppercase sm:block lg:tracking-[0.2em] xl:tracking-[0.3em]">
        Étanchéité · Rénovation
      </span>
    </span>
  </Link>
);

const socialLinkClassName =
  "inline-flex size-9 items-center justify-center rounded-full text-anthracite transition-colors hover:bg-sable-clair hover:text-petrole";

export const Header = ({
  instagramUrl,
  facebookUrl,
}: {
  instagramUrl: string;
  facebookUrl?: string;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-sable/70 bg-ivoire/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm xl:gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "relative py-2 transition-colors hover:text-petrole",
                    isActive(item.href)
                      ? "text-petrole after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-petrole"
                      : "text-anthracite",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center lg:flex">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={socialLinkClassName}
            >
              <InstagramIcon className="size-5" />
              <span className="sr-only">Instagram</span>
            </a>
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className={socialLinkClassName}
              >
                <FacebookIcon className="size-5" />
                <span className="sr-only">Facebook</span>
              </a>
            )}
          </div>
          <a
            href={site.nuancier.url}
            target="_blank"
            rel="noreferrer"
            title={site.nuancier.label}
            className="hidden items-center gap-2 rounded-md bg-petrole px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-petrole-fonce lg:inline-flex"
          >
            <span className="xl:hidden">Nuancier</span>
            <span className="hidden xl:inline">{site.nuancier.shortLabel}</span>
            <ExternalIcon className="size-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="inline-flex size-10 items-center justify-center rounded-md text-anthracite hover:bg-sable-clair lg:hidden"
          >
            <span className="sr-only">
              {open ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            {open ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={clsx(
          "border-t border-sable/70 bg-ivoire lg:hidden",
          !open && "hidden",
        )}
      >
        <nav aria-label="Navigation mobile" className="px-5 py-4">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block border-b border-sable/50 py-3.5 font-serif text-2xl",
                    isActive(item.href) ? "text-petrole" : "text-anthracite",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <a
              href={site.nuancier.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-petrole"
            >
              {site.nuancier.label}
              <ExternalIcon className="size-4" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-anthracite"
            >
              <InstagramIcon className="size-5" />
              Suivez-nous sur Instagram
            </a>
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-anthracite"
              >
                <FacebookIcon className="size-5" />
                Retrouvez-nous sur Facebook
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
