"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const AchievementGallery = ({
  images,
  title,
}: {
  images: ImageField[];
  title: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [current, setCurrent] = useState(1);

  if (!images.length) return null;

  return (
    <div className="gallery">
      <div className="relative">
        <Swiper
          modules={[A11y, Keyboard, Navigation, Thumbs]}
          navigation={images.length > 1}
          keyboard={{ enabled: true }}
          spaceBetween={12}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          a11y={{
            prevSlideMessage: "Photo précédente",
            nextSlideMessage: "Photo suivante",
            slideLabelMessage: "Photo {{index}} sur {{slidesLength}}",
          }}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
          className="overflow-hidden rounded-lg bg-sable-clair"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${image.url}-${index}`}>
              <div className="relative aspect-[4/3] md:aspect-[16/10]">
                <PrismicNextImage
                  field={image}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1152px) 1088px, 100vw"
                  fallbackAlt=""
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {images.length > 1 && (
          <p
            aria-hidden="true"
            className="absolute right-4 bottom-4 z-10 rounded-full bg-anthracite/70 px-3 py-1 text-xs text-white"
          >
            {current} / {images.length}
          </p>
        )}
      </div>

      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          freeMode
          watchSlidesProgress
          spaceBetween={10}
          slidesPerView={3.5}
          breakpoints={{
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          className="mt-3 !p-[3px]"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`thumb-${image.url}-${index}`}
              className="cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-sable-clair">
                <PrismicNextImage
                  field={image}
                  fill
                  sizes="160px"
                  fallbackAlt=""
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <p className="sr-only">Galerie photos : {title}</p>
    </div>
  );
};
