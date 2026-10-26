"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { asImageSrc, ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useMemo, useState } from "react";

import { ExpandIcon } from "@/components/icons";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const LIGHTBOX_WIDTHS = [800, 1600, 2400];

const lightboxLabels = {
  Previous: "Photo précédente",
  Next: "Photo suivante",
  Close: "Fermer",
  "Zoom in": "Zoom avant",
  "Zoom out": "Zoom arrière",
  Lightbox: "Visionneuse photos",
  Carousel: "Carrousel",
  Slide: "Photo",
  "Photo gallery": "Galerie photos",
  "{index} of {total}": "{index} sur {total}",
  "Show thumbnails": "Afficher les miniatures",
  "Hide thumbnails": "Masquer les miniatures",
};

export const AchievementGallery = ({
  images,
  title,
}: {
  images: ImageField[];
  title: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);
  const [current, setCurrent] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = useMemo(
    () =>
      images.map((image) => {
        const { width = 1600, height = 1200 } = image.dimensions ?? {};
        const ratio = height / width;
        return {
          src: asImageSrc(image, { w: 2400 }) ?? "",
          alt: image.alt ?? "",
          width,
          height,
          srcSet: LIGHTBOX_WIDTHS.map((w) => ({
            src: asImageSrc(image, { w }) ?? "",
            width: w,
            height: Math.round(w * ratio),
          })),
        };
      }),
    [images],
  );

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
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
          className="overflow-hidden rounded-lg bg-sable-clair"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${image.url}-${index}`}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label="Afficher la photo en grand"
                className="group/zoom relative block aspect-[4/3] w-full cursor-zoom-in md:aspect-[16/10]"
              >
                <PrismicNextImage
                  field={image}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1152px) 1088px, 100vw"
                  fallbackAlt=""
                  className="object-contain"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-ivoire/90 text-petrole opacity-80 shadow-sm transition-opacity group-hover/zoom:opacity-100"
                >
                  <ExpandIcon className="size-4" />
                </span>
              </button>
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

      <Lightbox
        className="gallery-lightbox"
        open={lightboxIndex >= 0}
        index={Math.max(lightboxIndex, 0)}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Counter, Thumbnails, Zoom]}
        labels={lightboxLabels}
        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
        thumbnails={{
          width: 96,
          height: 72,
          border: 2,
          borderRadius: 6,
          gap: 12,
          imageFit: "cover",
        }}
        zoom={{ maxZoomPixelRatio: 2 }}
        carousel={{ finite: images.length <= 1 }}
        controller={{ closeOnBackdropClick: true }}
        on={{
          view: ({ index }) => {
            if (lightboxIndex >= 0) mainSwiper?.slideTo(index, 0);
          },
        }}
      />
    </div>
  );
};
