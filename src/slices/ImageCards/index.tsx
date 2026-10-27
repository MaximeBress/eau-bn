import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

export type ImageCardsProps = SliceComponentProps<Content.ImageCardsSlice>;

const ImageCards: FC<ImageCardsProps> = ({ slice }) => {
  return (
    <Bounded as="section">
      {isFilled.richText(slice.primary.heading) && (
        <Heading className="mb-10 text-center">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      )}
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {slice.items.map(
          (item: Content.ImageCardsSliceDefaultItem, index: number) => (
            <li key={index} className="reveal flex flex-col gap-5">
              {isFilled.image(item.image) && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sable-clair">
                  <PrismicNextImage
                    field={item.image}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    fallbackAlt=""
                  />
                </div>
              )}
              <div className="prose-eau">
                <PrismicRichText field={item.text} />
              </div>
              {isFilled.link(item.buttonLink) && (
                <PrismicLink
                  field={item.buttonLink}
                  className="font-medium text-petrole underline underline-offset-4"
                >
                  {item.buttonText || "En savoir plus"}
                </PrismicLink>
              )}
            </li>
          ),
        )}
      </ul>
    </Bounded>
  );
};

export default ImageCards;
