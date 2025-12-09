import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import clsx from 'clsx';

import { Bounded } from 'components/Bounded';
import { ImageSliceProps } from 'slice-types';

const Image = ({ slice, index }: ImageSliceProps) => {
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
