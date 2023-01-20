import type { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicRichText, SliceComponentType } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from 'components/Bounded';
import { Heading } from 'components/Heading';

const Hero: SliceComponentType<Content.HeroSlice> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-slate-900 text-white">
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          layout="fill"
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components =>
                <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
                  {components}
                </Heading>
              }
            />
          </div>
          {prismicH.isFilled.link(slice.primary.buttonLink) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.buttonText || 'Learn More'}
            </PrismicLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
