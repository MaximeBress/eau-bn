import { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicRichText, PrismicText, SliceComponentType } from '@prismicio/react';

import { Bounded } from 'components/Bounded';
import { ConditionalWrap } from 'components/ConditionalWrap';
import { Heading } from 'components/Heading';

const ImageCards: SliceComponentType<Content.ImageCardsSlice> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {slice.items.map((item) => (
            <li className="grid gap-8">
              {prismicH.isFilled.image(item.image) && (
                <div className="bg-gray-100">
                  <ConditionalWrap
                    condition={prismicH.isFilled.link(item.buttonLink)}
                    wrap={({ children }: any) => {
                      return (
                        <PrismicLink field={item.buttonLink} tabIndex={-1}>
                          {children}
                        </PrismicLink>
                      );
                    }}
                  >
                    <PrismicNextImage field={item.image} layout="responsive" />
                  </ConditionalWrap>
                </div>
              )}
              <div className="leading-relaxed">
                <PrismicRichText field={item.text} />
              </div>
              {prismicH.isFilled.link(item.buttonLink) && (
                <div>
                  <PrismicLink field={item.buttonLink} className="font-semibold">
                    {item.buttonText || 'More Info'}
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
