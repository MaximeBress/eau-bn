import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

const Quote: FC<QuoteProps> = ({ slice }) => {
  if (!isFilled.richText(slice.primary.quote)) return null;

  return (
    <Bounded as="section">
      <figure className="mx-auto max-w-4xl text-center">
        <blockquote className="font-serif text-3xl leading-snug text-petrole md:text-4xl">
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
        </blockquote>
        {isFilled.keyText(slice.primary.source) && (
          <figcaption className="mt-4 text-sm tracking-[0.2em] uppercase">
            {slice.primary.source}
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default Quote;
