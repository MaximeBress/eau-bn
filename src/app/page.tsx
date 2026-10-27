import Image from "next/image";

import { AchievementCard } from "@/components/AchievementCard";
import {
  ContactCta,
  NuancierBand,
  ServiceCards,
  Steps,
} from "@/components/sections";
import { ButtonLink, Container, Section, SectionTitle } from "@/components/ui";
import { getAchievements } from "@/lib/achievements";

export default async function Home() {
  const achievements = (await getAchievements()).slice(0, 4);

  return (
    <>
      <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden">
        <Image
          src="/images/hero-piscine.jpg"
          alt="Piscine réalisée par Eau BN Piscines dans un jardin méditerranéen"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ivoire via-ivoire/80 to-ivoire/0 md:via-ivoire/60" />
        <Container className="py-20">
          <div className="max-w-xl">
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Des idées aux pieds dans l’eau…
            </h1>
            <p className="mt-6 text-lg leading-relaxed md:text-xl">
              Étanchéité, rénovation et accompagnement de votre projet.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Parlons de votre projet</ButtonLink>
              <ButtonLink href="/realisations" variant="outline">
                Nos réalisations
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivoire">
        <div className="grid md:grid-cols-2">
          <div className="reveal flex flex-col justify-center px-5 py-16 md:py-24 md:pr-12 md:pl-[max(2rem,calc(50vw-34rem))]">
            <h2 className="text-4xl leading-tight md:text-5xl">
              Notre cœur de métier, l’étanchéité.
            </h2>
            <span
              aria-hidden="true"
              className="mt-5 block h-px w-14 bg-petrole"
            />
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Une préparation soignée du support, des soudures précises et des
              finitions maîtrisées : nous accompagnons chaque étape de votre
              projet, du premier rendez-vous à la mise en eau.
            </p>
            <ButtonLink
              href="/etancheite-pvc-arme"
              variant="outline"
              className="mt-8 self-start"
            >
              Le PVC armé
            </ButtonLink>
          </div>
          <div className="relative min-h-80 md:min-h-[30rem]">
            <Image
              src="/images/pvc-arme-escalier.jpg"
              alt="Escalier d’angle revêtu de PVC armé"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {achievements.length > 0 && (
        <Section>
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle eyebrow="Nos réalisations" className="mb-0 md:mb-0">
                Quelques chantiers récents
              </SectionTitle>
              <ButtonLink href="/realisations" variant="outline">
                Toutes nos réalisations
              </ButtonLink>
            </div>
            <ul className="mt-10 grid gap-x-8 gap-y-14 md:mt-14 md:grid-cols-2">
              {achievements.map((achievement) => (
                <li key={achievement.uid} className="reveal">
                  <AchievementCard achievement={achievement} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section tone="sable">
        <Container>
          <SectionTitle align="center" eyebrow="Nos savoir-faire">
            Des solutions pour votre piscine
          </SectionTitle>
          <ServiceCards />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle align="center" eyebrow="Notre accompagnement">
            Du premier rendez-vous à la mise en eau
          </SectionTitle>
          <Steps />
        </Container>
      </Section>

      <NuancierBand />
      <ContactCta />
    </>
  );
}
