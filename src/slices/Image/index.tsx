import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image: FC<ImageProps> = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {isFilled.image(image) && (
        <div className="bg-gray-100 relative w-full aspect-[16/9]">
          <PrismicNextImage
            field={image}
            fill
            className="object-cover"
            fallbackAlt=""
          />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
