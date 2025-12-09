import { Content, isFilled } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { FC } from "react";

import { Bounded } from "@/components/Bounded";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  const style = {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImage.url})`,
    height: "500px",
  };

  return (
    <section className="relative overflow-hidden" style={style}>
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center text-white">
            <PrismicRichText field={slice.primary.text} />
          </div>
          {isFilled.link(slice.primary.buttonLink) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
