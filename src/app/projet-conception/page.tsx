import { Metadata } from "next";
import Image from "next/image";

import {
  ContactCta,
  PageHero,
  RelatedServices,
  Steps,
} from "@/components/sections";
import { Container, Section, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vos projets : construction, rénovation et coordination",
  description:
    "Construction neuve, rénovation ou conversion d’un bassin carrelé : Eau BN Piscines vous accompagne du premier rendez-vous à la livraison du chantier.",
};

const trades = ["Maçonnerie", "Plomberie", "Terrassement", "Étanchéité"];

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projets / Coordination"
        title="Vos projets"
        intro={
          <p>
            Construction neuve, rénovation ou conversion d’un bassin carrelé ou
            en mosaïque : Eau BN Piscines vous accompagne du premier rendez-vous
            à la livraison du chantier.
          </p>
        }
        image="/images/projet-plan.jpg"
        imageAlt="Plan d’implantation d’une piscine et de ses abords"
      />

      <Section tone="blanc">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/projet-preparation.jpg"
              alt="Bassin en cours de rénovation, prêt à recevoir son étanchéité"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal space-y-5 text-lg leading-relaxed">
            <p>
              Lors d’un rendez-vous préalable, nous étudions votre projet et
              vous apportons nos conseils en partageant notre expérience du
              terrain. Ensemble, nous définissons les solutions adaptées à vos
              besoins, en tenant compte de l’environnement, du décor et de
              l’esthétique souhaitée.
            </p>
            <p>
              Notre savoir-faire, associé à un réseau de partenaires qualifiés,
              nous permet d’organiser les différentes étapes des travaux et
              d’assurer le bon déroulement de votre projet.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="sable">
        <Container className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
          <div className="reveal">
            <SectionTitle className="mb-8 md:mb-8">
              Un spécialiste pour chaque corps de métier
            </SectionTitle>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Parce que la maîtrise de chaque métier contribue à la pérennité
                de l’ouvrage, nous faisons intervenir des professionnels
                spécialisés en maçonnerie, plomberie, terrassement et
                étanchéité.
              </p>
              <p>
                Spécialiste de l’étanchéité, Eau BN Piscines assure également la
                coordination des équipes et le suivi du chantier. Nous veillons
                à l’enchaînement des interventions, à la qualité des travaux et
                au respect des délais convenus, jusqu’à la mise en eau du bassin
                et à la livraison du chantier.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {trades.map((trade) => (
                <li
                  key={trade}
                  className="rounded-full border border-petrole/40 bg-ivoire px-4 py-1.5 text-sm text-petrole"
                >
                  {trade}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/projet-chantier.jpg"
              alt="Chantier de rénovation d’une piscine coordonné par Eau BN Piscines"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle align="center" eyebrow="Notre accompagnement">
            Du premier rendez-vous à la mise en eau
          </SectionTitle>
          <Steps />
          <p className="reveal mx-auto mt-16 max-w-3xl text-center font-serif text-3xl leading-snug text-petrole md:text-4xl">
            Un interlocuteur unique pour simplifier vos démarches et vous
            accompagner sereinement dans la construction ou la rénovation de
            votre piscine.
          </p>
        </Container>
      </Section>

      <RelatedServices exclude="/projet-conception" />
      <ContactCta />
    </>
  );
}
