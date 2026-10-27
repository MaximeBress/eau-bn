import { Content, ImageField, isFilled } from "@prismicio/client";

import { createClient } from "@/prismicio";

export type AchievementSummary = {
  uid: string;
  href: string;
  title: string;
  details: string[];
  intervention?: string;
  finition?: string;
  image: Content.AchievementDocument["data"]["image"];
};

const optionalText = (data: object, key: string) => {
  const value = (data as Record<string, unknown>)[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
};

// The title field historically holds several lines (title, intervention,
// finish): the first line is the title, the others are shown as details.
export const toSummary = (
  achievement: Content.AchievementDocument,
): AchievementSummary => {
  const [title = "Réalisation", ...details] = String(
    achievement.data.title ?? "",
  )
    .split("\n")
    .map((line: string) => line.trim())
    .filter(Boolean);

  return {
    uid: achievement.uid,
    href: `/realisations/${achievement.uid}`,
    title,
    details,
    intervention: optionalText(achievement.data, "intervention"),
    finition: optionalText(achievement.data, "finition"),
    image: achievement.data.image,
  };
};

export const getAchievements = async () => {
  const client = createClient();
  const achievements = await client.getAllByType("achievement", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return achievements.map(toSummary);
};

// All photos of a réalisation: main image first, then images found in slices.
export const getGalleryImages = (
  achievement: Content.AchievementDocument,
): ImageField[] => {
  const images: ImageField[] = [];
  const seen = new Set<string>();
  const add = (image: ImageField | undefined) => {
    if (!image || !isFilled.image(image)) return;
    const key = image.url.split("?")[0];
    if (seen.has(key)) return;
    seen.add(key);
    images.push(image);
  };

  add(achievement.data.image);
  for (const slice of achievement.data.slices) {
    const primary = slice.primary as Record<string, unknown>;
    add((primary.image ?? primary.backgroundImage) as ImageField | undefined);
    for (const item of (slice.items ?? []) as Record<string, unknown>[]) {
      add(item.image as ImageField | undefined);
    }
  }

  return images;
};
