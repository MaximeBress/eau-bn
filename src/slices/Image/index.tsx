import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image: FC<ImageProps> = ({ slice }) => {
  const image = slice.primary.image;

  if (!isFilled.image(image)) return null;

  return (
    <Bounded as="section">
      <div className="reveal overflow-hidden rounded-lg bg-sable-clair">
        <PrismicNextImage
          field={image}
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="h-auto max-h-[85svh] w-full object-cover"
          fallbackAlt=""
        />
      </div>
    </Bounded>
  );
};

export default Image;
