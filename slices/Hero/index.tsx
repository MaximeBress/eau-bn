import type { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicRichText, SliceComponentType } from '@prismicio/react';

import { Bounded } from 'components/Bounded';
import { Heading } from 'components/Heading';

const Hero: SliceComponentType<Content.HeroSlice> = ({ slice }) => {
    const backgroundImage = slice.primary.backgroundImage;

    const style = {
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${backgroundImage.url})`,
        height: '500px'
    }

    return (
        <section className="relative overflow-hidden" style={style}>
            <Bounded yPadding="lg" className="relative">
                <div className="grid justify-items-center gap-8">
                    <div className="max-w-2xl text-center text-white">
                        <PrismicRichText field={slice.primary.text}/>
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
