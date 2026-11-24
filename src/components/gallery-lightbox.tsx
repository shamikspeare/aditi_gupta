"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

type Artwork = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

type GalleryLightboxProps = {
  artworks: readonly Artwork[];
};

export function GalleryLightbox({ artworks }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const openerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const openedIndexRef = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = activeIndex !== null;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + artworks.length) % artworks.length,
    );
  }, [artworks.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % artworks.length,
    );
  }, [artworks.length]);

  const openArtwork = (index: number) => {
    openedIndexRef.current = index;
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const openedIndex = openedIndexRef.current;
    const opener = openedIndex === null ? null : openerRefs.current[openedIndex];
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      opener?.focus();
    };
  }, [closeLightbox, isOpen, showNext, showPrevious]);

  const activeArtwork = activeIndex === null ? null : artworks[activeIndex];

  return (
    <>
      <div className="mt-14 columns-2 gap-3 sm:gap-5 lg:columns-4 lg:gap-6">
        {artworks.map((artwork, index) => (
          <figure
            key={artwork.src}
            data-reveal="media"
            data-reveal-delay={(index % 4) * 0.06}
            className="mb-3 break-inside-avoid sm:mb-5 lg:mb-6"
          >
            <button
              ref={(node) => {
                openerRefs.current[index] = node;
              }}
              type="button"
              aria-label={`Expand ${artwork.alt}`}
              onClick={() => openArtwork(index)}
              className="group block w-full cursor-zoom-in overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617]"
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015] group-focus-visible:scale-[1.015]"
              />
            </button>
          </figure>
        ))}
      </div>

      {activeArtwork && activeIndex !== null
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Artwork ${activeIndex + 1} of ${artworks.length}`}
              onClick={closeLightbox}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                const startX = touchStartX.current;
                const endX = event.changedTouches[0]?.clientX;
                touchStartX.current = null;
                if (startX === null || endX === undefined) return;

                const distance = endX - startX;
                if (Math.abs(distance) < 50) return;
                if (distance > 0) showPrevious();
                else showNext();
              }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/95 px-4 py-16 sm:px-20"
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close expanded artwork"
                onClick={closeLightbox}
                className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 sm:right-7 sm:top-7"
              >
                <X aria-hidden="true" className="size-5" strokeWidth={1.7} />
              </button>

              <button
                type="button"
                aria-label="View previous artwork"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute bottom-4 left-[calc(50%-3.5rem)] z-20 grid size-11 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronLeft
                  aria-hidden="true"
                  className="size-7"
                  strokeWidth={1.6}
                />
              </button>

              <div
                onClick={(event) => event.stopPropagation()}
                className="flex max-h-full max-w-full items-center justify-center"
              >
                <Image
                  key={activeArtwork.src}
                  src={activeArtwork.src}
                  alt={activeArtwork.alt}
                  width={activeArtwork.width}
                  height={activeArtwork.height}
                  sizes="100vw"
                  className="max-h-[calc(100dvh-9rem)] w-auto max-w-full object-contain sm:max-h-[calc(100dvh-5rem)]"
                />
              </div>

              <p
                aria-live="polite"
                className="absolute bottom-[5.25rem] left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/75 sm:bottom-7"
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(artworks.length).padStart(2, "0")}
              </p>

              <button
                type="button"
                aria-label="View next artwork"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute bottom-4 right-[calc(50%-3.5rem)] z-20 grid size-11 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronRight
                  aria-hidden="true"
                  className="size-7"
                  strokeWidth={1.6}
                />
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
