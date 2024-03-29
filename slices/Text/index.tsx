import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentType } from '@prismicio/react';
import clsx from 'clsx';

import { Bounded } from 'components/Bounded';

const Text: SliceComponentType<Content.TextSlice> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <div
        className={clsx(
          slice.variation === 'twoColumns' && 'md:columns-2 md:gap-6',
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;
