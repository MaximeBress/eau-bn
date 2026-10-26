import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {isFilled.image(image) && (
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <PrismicNextImage
                field={image}
                fill
                className="object-cover"
                fallbackAlt=""
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
