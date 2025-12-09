import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type TextProps = SliceComponentProps<Content.TextSlice>;

const Text: FC<TextProps> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6",
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;
