import { Metadata } from "next";
import Image from "next/image";

import {
  ContactCta,
  NuancierBand,
  PageHero,
  RelatedServices,
} from "@/components/sections";
import { Container, Section, SectionTitle } from "@/components/ui";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Étanchéité PVC armé",
  description:
    "Le PVC armé : une étanchéité durable et une finition à votre image pour la construction ou la rénovation de votre piscine.",
};

const facts = [
  { value: "1,5 à 2 mm", label: "d’épaisseur (150/100 à 200/100)" },
  { value: "4 supports", label: "béton, polystyrène, bois ou polyester" },
  {
    value: "Large choix",
    label: "de couleurs unies, effets minéraux et reliefs",
  },
];

export default function EtancheitePage() {
  return (
    <>
      <PageHero
        eyebrow="Étanchéité / PVC armé"
        title="Le PVC armé : une étanchéité durable, une finition à votre image"
        intro={
          <p>
            La membrane en PVC armé associe étanchéité et esthétique pour la
            construction ou la rénovation de votre piscine. D’une épaisseur de
            150/100 à 200/100, soit 1,5 à 2 mm, elle épouse les formes du bassin
            et offre un large choix de finitions.
          </p>
        }
        image="/images/pvc-arme-renovation.jpg"
        imageAlt="Bassin rénové avec une membrane PVC armé gris anthracite"
      />

      <section className="border-y border-sable bg-white">
        <Container>
          <ul className="grid divide-sable py-8 sm:grid-cols-3 sm:divide-x">
            {facts.map((fact) => (
              <li key={fact.value} className="px-4 py-4 text-center">
                <span className="block font-serif text-3xl text-petrole">
                  {fact.value}
                </span>
                <span className="mt-1 block text-sm">{fact.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
          <div className="reveal">
            <SectionTitle className="mb-8 md:mb-8">
              Une étanchéité indépendante du support
            </SectionTitle>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Le PVC armé désolidarise l’étanchéité du support. Sa souplesse
                lui permet d’accompagner de légers mouvements de la structure,
                notamment liés aux contraintes du sol, dans les limites
                admissibles du revêtement. Il ne remplace pas la réparation
                d’une structure fragilisée.
              </p>
              <p>
                Il peut être posé sur différents types de bassins : béton,
                polystyrène, bois ou polyester, sous réserve d’une préparation
                adaptée du support, réalisée dans les règles de l’art et selon
                les prescriptions du fabricant.
              </p>
              <p className="border-l-2 border-petrole pl-5 font-serif text-2xl leading-snug text-petrole">
                Chez Eau BN Piscines, nous accordons une attention particulière
                à cette préparation, à la précision des soudures et au soin des
                finitions.
              </p>
            </div>
          </div>
          <div className="reveal relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/pvc-arme-pose.jpg"
              alt="Pose d’une membrane PVC armé dans un bassin en rénovation"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/pvc-arme-bassin.jpg"
              alt="Piscine habillée d’une membrane PVC armé foncée"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <SectionTitle className="mb-8 md:mb-8">
              Une piscine qui vous ressemble
            </SectionTitle>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Couleurs unies, effets minéraux ou textures en relief : nous
                vous accompagnons dans le choix d’une membrane en harmonie avec
                votre environnement et l’ambiance souhaitée.
              </p>
              <p>
                Découvrez les collections et le nuancier{" "}
                <a
                  href={site.nuancier.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-petrole underline underline-offset-4 hover:text-petrole-fonce"
                >
                  en cliquant ici
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sable">
        <Container className="max-w-4xl">
          <SectionTitle align="center">
            Les bons gestes pour la faire durer
          </SectionTitle>
          <div className="reveal grid gap-8 text-lg leading-relaxed md:grid-cols-2">
            <p>
              À la livraison, nous prenons le temps de vous présenter votre
              revêtement et de vous transmettre les conseils d’utilisation et
              d’entretien adaptés.
            </p>
            <p>
              Une eau équilibrée est essentielle pour préserver votre membrane.
              Des traitements adaptés, un entretien régulier et un hivernage
              soigné contribuent à conserver son aspect et ses qualités dans le
              temps.
            </p>
          </div>
          <div className="reveal mt-14 text-center">
            <p className="font-serif text-3xl leading-snug text-petrole md:text-4xl">
              Un travail soigné et des conseils clairs pour profiter sereinement
              de votre piscine.
            </p>
            <p className="mt-6 text-sm tracking-[0.2em] uppercase">
              Eau BN Piscines — Notre cœur de métier, l’étanchéité.
            </p>
          </div>
        </Container>
      </Section>

      <NuancierBand />
      <RelatedServices exclude="/etancheite-pvc-arme" />
      <ContactCta />
    </>
  );
}
