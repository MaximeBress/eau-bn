import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  const image = slice.primary.image;
  const hasText = isFilled.richText(slice.primary.text);

  return (
    <Bounded as="section">
      <div
        className={clsx(
          "grid grid-cols-1 items-center gap-8 md:gap-14",
          hasText && "md:grid-cols-2",
        )}
      >
        {hasText && (
          <div className="prose-eau text-lg">
            <PrismicRichText field={slice.primary.text} />
          </div>
        )}
        {isFilled.image(image) && (
          <div
            className={clsx(
              "reveal relative overflow-hidden rounded-lg bg-sable-clair",
              hasText ? "aspect-[4/3]" : "aspect-[16/9]",
            )}
          >
            <PrismicNextImage
              field={image}
              fill
              sizes={hasText ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
              className="object-cover"
              fallbackAlt=""
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default TextWithImage;
