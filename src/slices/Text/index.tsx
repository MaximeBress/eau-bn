import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type TextProps = SliceComponentProps<Content.TextSlice>;

const Text: FC<TextProps> = ({ slice }) => {
  return (
    <Bounded as="section">
      <div
        className={clsx(
          "prose-eau max-w-3xl text-lg",
          slice.variation === "twoColumns" &&
            "max-w-none md:columns-2 md:gap-10",
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;
