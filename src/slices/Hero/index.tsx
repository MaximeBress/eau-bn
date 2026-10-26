import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { FC } from "react";

import { buttonClassName } from "@/components/ui";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative isolate my-6 overflow-hidden">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          fill
          sizes="100vw"
          className="-z-20 object-cover"
          fallbackAlt=""
        />
      )}
      <div className="absolute inset-0 -z-10 bg-anthracite/45" />
      <div className="mx-auto grid max-w-3xl justify-items-center gap-8 px-5 py-24 text-center text-white md:py-32">
        <div className="prose-eau text-lg [&_h1]:text-white [&_h2]:text-white">
          <PrismicRichText field={slice.primary.text} />
        </div>
        {isFilled.link(slice.primary.buttonLink) && (
          <PrismicLink
            field={slice.primary.buttonLink}
            className={buttonClassName("light")}
          >
            {slice.primary.buttonText || "En savoir plus"}
          </PrismicLink>
        )}
      </div>
    </section>
  );
};

export default Hero;
