import { Metadata } from "next";
import Image from "next/image";

import { ContactCta, PageHero, RelatedServices } from "@/components/sections";
import { Container, Section, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hydraulique, filtration et traitement de l’eau",
  description:
    "Réalisation et rénovation des installations hydrauliques de votre piscine : filtration, traitement de l’eau, révision et mise en conformité.",
};

const services = [
  {
    title: "Filtration",
    text: "Réalisation et installation de systèmes de filtration dimensionnés pour votre piscine, dans le respect des normes en vigueur.",
  },
  {
    title: "Traitement de l’eau",
    text: "Pose et installation d’équipements de traitement pour faciliter l’entretien et préserver la qualité de l’eau.",
  },
  {
    title: "Révision et mise en conformité",
    text: "Contrôle des installations existantes, identification des éléments à remplacer et réalisation des travaux nécessaires à leur bon fonctionnement et à leur conformité.",
  },
];

export default function HydrauliquePage() {
  return (
    <>
      <PageHero
        eyebrow="Hydraulique"
        title="Hydraulique, filtration et traitement de l’eau"
        intro={
          <p>
            Nous réalisons et rénovons les installations hydrauliques de votre
            piscine, avec des équipements adaptés à votre bassin et à son
            utilisation.
          </p>
        }
        image="/images/piscine-sable.jpg"
        imageAlt="Piscine à l’eau claire bordée de dalles en pierre"
      />

      <Section tone="blanc">
        <Container>
          <SectionTitle align="center" eyebrow="Nos interventions">
            Une installation adaptée à votre bassin
          </SectionTitle>
          <ol className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="reveal flex flex-col rounded-lg border border-sable bg-ivoire p-7"
              >
                <span className="font-serif text-4xl text-petrole/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl">{service.title}</h3>
                <p className="mt-3 leading-relaxed">{service.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sable">
        <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-14">
          <figure className="reveal overflow-hidden rounded-lg bg-white">
            <Image
              src="/images/hydraulique-local-technique.jpg"
              alt="Croquis d’un local technique de piscine : pompe, filtre à sable, coffrets de régulation et traitement de l’eau"
              width={1800}
              height={1200}
              sizes="(min-width: 768px) 55vw, 100vw"
              className="h-auto w-full mix-blend-multiply"
            />
          </figure>
          <div className="reveal">
            <SectionTitle className="mb-8 md:mb-8">
              Le local technique, cœur de votre piscine
            </SectionTitle>
            <p className="text-lg leading-relaxed">
              Pompe, filtre, coffrets de régulation et équipements de traitement
              : chaque élément est choisi et raccordé en fonction de votre
              bassin, pour une eau saine et un entretien simplifié.
            </p>
          </div>
        </Container>
      </Section>

      <RelatedServices exclude="/hydraulique" />
      <ContactCta />
    </>
  );
}
