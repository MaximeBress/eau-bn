import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import { Metadata } from "next";
import Image from "next/image";
import { Bounded } from "@/components/Bounded";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description: "Voici la liste des réalisations Eau BN",
};

export default async function Achievements() {
  const client = createClient();
  const achievements = await client.getAllByType("achievement");

  return (
    <Bounded>
      <div className="text-center max-w-lg flex flex-col gap-5 mx-auto mb-14">
        <h1 className="text-6xl text-blue-500 font-bold">Nos Réalisations</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.length > 0 &&
          achievements.map((achievement, index: number) => (
            <PrismicLink href={achievement.url as string} key={index}>
              <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                <Image
                  className="rounded-lg"
                  src={achievement.data.image.url || ""}
                  alt={achievement.data.title || "Réalisation"}
                  width={achievement.data.image.dimensions?.width || 800}
                  height={achievement.data.image.dimensions?.height || 600}
                />
                <p className="absolute bottom-6 px-4 text-lg text-white">
                  {achievement.data.title}
                </p>
              </figure>
            </PrismicLink>
          ))}
      </section>
    </Bounded>
  );
}
