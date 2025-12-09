import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { FC, ReactNode } from "react";

import { Bounded } from "@/components/Bounded";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { Heading } from "@/components/Heading";

export type ImageProps = SliceComponentProps<Content.ImageSlice>;

const ImageCards: FC<ImageProps> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {slice.items.map((item: any) => (
            <li className="grid gap-8">
              {isFilled.image(item.image) && (
                <div className="bg-gray-100 relative w-full aspect-[4/3]">
                  <ConditionalWrap
                    condition={isFilled.link(item.buttonLink)}
                    wrap={({ children }: { children: ReactNode }) => {
                      return (
                        <PrismicLink
                          field={item.buttonLink as never}
                          tabIndex={-1}
                        >
                          {children}
                        </PrismicLink>
                      );
                    }}
                  >
                    <PrismicNextImage
                      field={item.image}
                      fill
                      className="object-cover"
                      fallbackAlt=""
                    />
                  </ConditionalWrap>
                </div>
              )}
              <div className="leading-relaxed">
                <PrismicRichText field={item.text} />
              </div>
              {isFilled.link(item.buttonLink) && (
                <div>
                  <PrismicLink
                    field={item.buttonLink}
                    className="font-semibold"
                  >
                    {item.buttonText || "More Info"}
                  </PrismicLink>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ImageCards;
