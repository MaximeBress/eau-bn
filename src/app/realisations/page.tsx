import { Metadata } from "next";

import { AchievementCard } from "@/components/AchievementCard";
import { ContactCta } from "@/components/sections";
import { Container, Eyebrow, Section } from "@/components/ui";
import { getAchievements } from "@/lib/achievements";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez les chantiers réalisés par Eau BN Piscines : étanchéité PVC armé, rénovation et conversion de bassins.",
};

export default async function AchievementsPage() {
  const achievements = await getAchievements();

  return (
    <>
      <section className="bg-ivoire pt-14 pb-4 md:pt-24">
        <Container>
          <Eyebrow>Réalisations</Eyebrow>
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Nos chantiers
          </h1>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-14 bg-petrole"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Rénovations, conversions de bassins carrelés et nouvelles
            étanchéités : découvrez quelques-unes de nos réalisations, de la
            préparation du support jusqu’aux finitions.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          {achievements.length > 0 ? (
            <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2">
              {achievements.map((achievement) => (
                <li key={achievement.uid} className="reveal">
                  <AchievementCard achievement={achievement} />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nos réalisations arrivent bientôt.</p>
          )}
        </Container>
      </Section>

      <ContactCta title="Un projet similaire ? Parlons-en." />
    </>
  );
}
