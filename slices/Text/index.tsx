import { PrismicRichText } from '@prismicio/react';
import clsx from 'clsx';

import { Bounded } from 'components/Bounded';
import { TextSliceProps } from 'slice-types';

const Text = ({ slice }: TextSliceProps) => {
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
