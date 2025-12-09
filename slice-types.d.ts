import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';

// Wrapper types to handle optional id in Prismic slices
// These ensure the id field is required as expected by SliceComponentProps
type WithRequiredId<T> = T & { id: string };

export type HeroSliceProps = SliceComponentProps<WithRequiredId<Content.HeroSlice>>;
export type ImageSliceProps = SliceComponentProps<WithRequiredId<Content.ImageSlice>>;
export type ImageCardsSliceProps = SliceComponentProps<WithRequiredId<Content.ImageCardsSlice>>;
export type QuoteSliceProps = SliceComponentProps<WithRequiredId<Content.QuoteSlice>>;
export type TextSliceProps = SliceComponentProps<WithRequiredId<Content.TextSlice>>;
export type TextWithImageSliceProps = SliceComponentProps<WithRequiredId<Content.TextWithImageSlice>>;
