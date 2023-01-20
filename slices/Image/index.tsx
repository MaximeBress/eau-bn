import type { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentType } from '@prismicio/react';
import clsx from 'clsx';

import { Bounded } from 'components/Bounded';

const Image: SliceComponentType<Content.ImageSlice> = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx('bg-white', index === 0 && 'pt-0 md:pt-0')}
    >
      {prismicH.isFilled.image(image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={image} layout="responsive" />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
