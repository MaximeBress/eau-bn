import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { ArrowRightIcon, InstagramIcon } from "@/components/icons";
import { ButtonLink, Container, Eyebrow, SectionTitle } from "@/components/ui";
import { site } from "@/config/site";

type ImageSource = string | StaticImageData;

export const PageHero = ({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imageClassName = "object-cover",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: ImageSource;
  imageAlt: string;
  imageClassName?: string;
}) => (
  <section className="bg-ivoire">
    <div className="grid items-stretch md:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-14 md:py-24 md:pr-12 md:pl-[max(2rem,calc(50vw-34rem))]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl leading-[1.1] md:text-6xl">{title}</h1>
        <span aria-hidden="true" className="mt-6 block h-px w-14 bg-petrole" />
        {intro && (
          <div className="mt-6 max-w-xl text-lg leading-relaxed">{intro}</div>
        )}
      </div>
      <div className="relative min-h-72 md:min-h-[32rem]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className={imageClassName}
        />
      </div>
    </div>
  </section>
);

export const NuancierBand = () => (
  <section className="relative overflow-hidden bg-sable">
    <div className="grid md:grid-cols-2">
      <div className="reveal px-5 py-16 md:py-24 md:pr-12 md:pl-[max(2rem,calc(50vw-34rem))]">
        <Eyebrow>Couleurs et matières</Eyebrow>
        <h2 className="text-4xl leading-tight md:text-5xl">
          Couleurs et matières, à votre image.
        </h2>
        <span aria-hidden="true" className="mt-5 block h-px w-14 bg-petrole" />
        <p className="mt-6 max-w-md leading-relaxed">
          Couleurs unies, effets minéraux ou textures en relief : découvrez les
          collections de membranes PVC armé avec lesquelles nous travaillons.
        </p>
        <ButtonLink
          href={site.nuancier.url}
          external
          className="mt-8"
          aria-label={`${site.nuancier.label} (nouvel onglet)`}
        >
          Découvrir le nuancier RENOLIT ALKORPLAN
        </ButtonLink>
      </div>
      <div className="relative min-h-64 md:min-h-full">
        <Image
          src="/images/pvc-arme-mosaique.jpg"
          alt="Membrane PVC armé effet mosaïque posée dans un bassin"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);

export const ContactCta = ({
  title = "Votre projet commence par une rencontre.",
}: {
  title?: string;
}) => (
  <section className="relative isolate overflow-hidden">
    <Image
      src="/images/piscine-vue.jpg"
      alt=""
      fill
      sizes="100vw"
      className="-z-20 object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ivoire via-ivoire/90 to-ivoire/40" />
    <Container className="reveal py-20 md:py-28">
      <h2 className="max-w-xl text-4xl leading-tight md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-lg leading-relaxed">
        Parlez-nous de votre bassin, de vos envies et de vos contraintes : nous
        vous recontactons pour organiser un premier rendez-vous.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
        <ButtonLink href="/contact">Contactez-nous</ButtonLink>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 text-sm font-medium text-anthracite hover:text-petrole"
        >
          <InstagramIcon className="size-6" />
          Nos chantiers sur Instagram
        </a>
      </div>
    </Container>
  </section>
);

const steps = [
  {
    title: "Écouter",
    text: "Un premier rendez-vous pour étudier votre projet, vos envies et les contraintes de votre site.",
  },
  {
    title: "Conseiller",
    text: "Des solutions adaptées à votre environnement, au décor et à l’esthétique souhaitée.",
  },
  {
    title: "Coordonner",
    text: "Des professionnels spécialisés pour chaque corps de métier et un suivi de chantier rigoureux.",
  },
  {
    title: "Livrer",
    text: "La mise en eau, la présentation de votre revêtement et nos conseils d’entretien.",
  },
];

export const Steps = () => (
  <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
    <span
      aria-hidden="true"
      className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-sable md:block"
    />
    {steps.map((step, index) => (
      <li key={step.title} className="reveal relative text-center">
        <span className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-petrole bg-ivoire font-serif text-lg text-petrole">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-5 text-2xl">{step.title}</h3>
        <p className="mx-auto mt-2 max-w-60 text-sm leading-relaxed">
          {step.text}
        </p>
      </li>
    ))}
  </ol>
);

export const services = [
  {
    title: "Étanchéité / PVC armé",
    text: "Une membrane durable et esthétique, posée avec soin sur un support bien préparé.",
    href: "/etancheite-pvc-arme",
    image: "/images/pvc-arme-escalier.jpg",
    alt: "Escalier de piscine revêtu de PVC armé",
    imageClassName: "object-cover",
  },
  {
    title: "Hydraulique et traitement de l’eau",
    text: "Filtration, traitement de l’eau, révision et mise en conformité de vos installations.",
    href: "/hydraulique",
    image: "/images/hydraulique-local-technique.jpg",
    alt: "Croquis d’un local technique de piscine : pompe, filtre et traitement",
    imageClassName: "object-cover mix-blend-multiply",
  },
  {
    title: "Vos projets / Coordination",
    text: "De la conception à la livraison, un interlocuteur unique pour votre chantier.",
    href: "/projet-conception",
    image: "/images/projet-plan.jpg",
    alt: "Plan d’implantation d’une piscine",
    imageClassName: "object-cover",
  },
];

export const ServiceCards = () => (
  <ul className="grid gap-6 md:grid-cols-3">
    {services.map((service) => (
      <li key={service.href} className="reveal">
        <Link
          href={service.href}
          className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_1px_0_rgba(41,53,54,0.06)] transition-shadow hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-ivoire">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={`${service.imageClassName} transition-transform duration-700 group-hover:scale-105`}
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-2xl">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed">
              {service.text}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-petrole">
              En savoir plus
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export const RelatedServices = ({ exclude }: { exclude: string }) => (
  <section className="py-16 md:py-24">
    <Container>
      <SectionTitle align="center">Nos autres savoir-faire</SectionTitle>
      <ul className="grid gap-6 md:grid-cols-2">
        {services
          .filter((service) => service.href !== exclude)
          .map((service) => (
            <li key={service.href} className="reveal">
              <Link
                href={service.href}
                className="group flex items-center gap-5 rounded-lg bg-white p-4 transition-shadow hover:shadow-lg"
              >
                <span className="relative size-24 shrink-0 overflow-hidden rounded-md bg-ivoire">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="96px"
                    className={service.imageClassName}
                  />
                </span>
                <span>
                  <span className="block font-serif text-2xl">
                    {service.title}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm text-petrole">
                    Découvrir
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  </section>
);
