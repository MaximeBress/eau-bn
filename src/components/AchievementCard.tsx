import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { AchievementSummary } from "@/lib/achievements";

export const AchievementTags = ({
  achievement,
  className,
}: {
  achievement: AchievementSummary;
  className?: string;
}) => {
  const tags = [
    achievement.intervention && `Intervention : ${achievement.intervention}`,
    achievement.finition && `Finition : ${achievement.finition}`,
  ].filter(Boolean) as string[];

  if (!tags.length) return null;

  return (
    <ul className={clsx("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-sable-clair px-3 py-1 text-xs text-anthracite"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export const AchievementCard = ({
  achievement,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  achievement: AchievementSummary;
  sizes?: string;
}) => (
  <Link href={achievement.href} className="group block">
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sable-clair">
      {isFilled.image(achievement.image) && (
        <PrismicNextImage
          field={achievement.image}
          fill
          sizes={sizes}
          fallbackAlt=""
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </div>
    <div className="mt-5">
      <h3 className="text-2xl leading-snug transition-colors group-hover:text-petrole md:text-3xl">
        {achievement.title}
      </h3>
      {achievement.details.map((detail) => (
        <p key={detail} className="mt-1 text-sm text-anthracite/80">
          {detail}
        </p>
      ))}
      <AchievementTags achievement={achievement} className="mt-3" />
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-petrole">
        Voir la réalisation
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);
