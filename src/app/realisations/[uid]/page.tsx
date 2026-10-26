import { Content, isFilled, RichTextField } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  SliceZone,
} from "@prismicio/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AchievementCard, AchievementTags } from "@/components/AchievementCard";
import { AchievementGallery } from "@/components/AchievementGallery";
import { Bounded } from "@/components/Bounded";
import { ArrowRightIcon } from "@/components/icons";
import { ContactCta } from "@/components/sections";
import { Container, Section, SectionTitle } from "@/components/ui";
import {
  getAchievements,
  getGalleryImages,
  toSummary,
} from "@/lib/achievements";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

// Photos are shown in the gallery: slices only contribute their text here.
const SliceText = ({
  slice,
}: SliceComponentProps<
  Content.TextWithImageSlice | Content.HeroSlice | Content.ImageSlice
>) => {
  const text = (slice.primary as { text?: RichTextField }).text;
  if (!text || !isFilled.richText(text)) return null;

  return (
    <Bounded as="section">
      <div className="prose-eau max-w-3xl text-lg">
        <PrismicRichText field={text} />
      </div>
    </Bounded>
  );
};

const detailComponents = {
  ...components,
  hero: SliceText,
  image: SliceText,
  text_with_image: SliceText,
};

const getAchievement = async (uid: string) => {
  const client = createClient();
  return client.getByUID("achievement", uid).catch(() => notFound());
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const achievement = await getAchievement(uid);
  const summary = toSummary(achievement);

  return {
    title: achievement.data.meta_title || summary.title,
    description:
      achievement.data.meta_description ||
      summary.details.join(" — ") ||
      undefined,
  };
}

export async function generateStaticParams() {
  const achievements = await getAchievements();
  return achievements.map(({ uid }) => ({ uid }));
}

export default async function AchievementPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { uid } = await params;
  const achievement = await getAchievement(uid);
  const summary = toSummary(achievement);
  const others = (await getAchievements())
    .filter((other) => other.uid !== uid)
    .slice(0, 2);

  return (
    <>
      <section className="bg-ivoire pt-10 pb-6 md:pt-16 md:pb-10">
        <Container>
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-2 text-sm text-petrole"
          >
            <ArrowRightIcon className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Toutes nos réalisations
          </Link>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] md:text-6xl">
            {summary.title}
          </h1>
          {summary.details.map((detail) => (
            <p key={detail} className="mt-2 text-lg">
              {detail}
            </p>
          ))}
          <AchievementTags achievement={summary} className="mt-5" />
          <div className="mt-10">
            <AchievementGallery
              images={getGalleryImages(achievement)}
              title={summary.title}
            />
          </div>
        </Container>
      </section>

      <SliceZone
        slices={achievement.data.slices}
        components={detailComponents}
      />

      {others.length > 0 && (
        <Section tone="sable">
          <Container>
            <SectionTitle>D’autres réalisations</SectionTitle>
            <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2">
              {others.map((other) => (
                <li key={other.uid} className="reveal">
                  <AchievementCard achievement={other} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <ContactCta title="Un projet similaire ? Parlons-en." />
    </>
  );
}
