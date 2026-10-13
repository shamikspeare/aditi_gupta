"use client";

import React, { useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { SiteFooter } from "@/components/site-footer";
import { SectionReveal } from "@/components/section-reveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   Featured section cards (local images)
──────────────────────────────────────────────────────────── */
const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Bloom Again</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A serene and tranquil retreat, exploring the quiet beauty of renewal
      through colour, texture, and light.
    </p>
  </div>
);
const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      Where the Light Lives
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Perched between shadow and illumination, this piece captures the fleeting
      moments where light transforms everything it touches.
    </p>
  </div>
);
const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Quiet Corners</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      An intimate exploration of overlooked spaces — the beauty found in
      stillness and the poetry of solitude.
    </p>
  </div>
);
const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Fading Gold</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A meditation on transience and warmth — capturing the golden hour before
      it slips away into memory.
    </p>
  </div>
);

const featuredCards = [
  { id: 1, content: <SkeletonOne />, className: "md:col-span-2", thumbnail: "/bg.webp" },
  { id: 2, content: <SkeletonTwo />, className: "col-span-1", thumbnail: "/bg2.webp" },
  { id: 3, content: <SkeletonThree />, className: "col-span-1", thumbnail: "/bg3.webp" },
  { id: 4, content: <SkeletonFour />, className: "md:col-span-2", thumbnail: "/bg4.webp" },
];

/* ────────────────────────────────────────────────────────────
   Image viewer grid (gray boxes with lightbox)
──────────────────────────────────────────────────────────── */
type GalleryItem = {
  id: number;
  title: string;
  medium: string;
  year: string;
  description: string;
  span?: "wide";
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "House in the Woods",
    medium: "Oil on Canvas",
    year: "2024",
    description:
      "A serene and tranquil retreat, this piece offers a peaceful escape from the hustle and bustle of city life.",
    span: "wide",
  },
  {
    id: 2,
    title: "House above the Clouds",
    medium: "Acrylic on Canvas",
    year: "2023",
    description:
      "Perched high above the world, this house offers breathtaking views and a unique living experience.",
  },
  {
    id: 3,
    title: "Greens All Over",
    medium: "Mixed Media",
    year: "2024",
    description:
      "A house surrounded by greenery and nature's beauty — the perfect place to relax, unwind, and enjoy life.",
  },
  {
    id: 4,
    title: "Rivers Are Serene",
    medium: "Oil on Canvas",
    year: "2023",
    description:
      "A house by the river is a place of peace and tranquility, perfect for quiet contemplation.",
    span: "wide",
  },
  {
    id: 5,
    title: "Golden Dusk",
    medium: "Watercolour",
    year: "2024",
    description:
      "The last light of day painted in warm gold, captured in a fleeting moment of pure beauty.",
  },
  {
    id: 6,
    title: "Misty Mornings",
    medium: "Oil on Canvas",
    year: "2023",
    description:
      "Soft fog drifts across the hills at dawn, blurring the lines between earth and sky.",
  },
];

function ImageViewerGrid() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="px-6 sm:px-10 lg:px-14">
      {/* Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {galleryItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative overflow-hidden rounded-2xl bg-zinc-800/60 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:outline-offset-2 ${
              item.span === "wide" ? "sm:col-span-2" : ""
            }`}
          >
            {/* Gray box image area */}
            <div
              className={`w-full bg-gradient-to-br from-zinc-700 to-zinc-800 transition-transform duration-500 group-hover:scale-105 ${
                item.span === "wide" ? "aspect-[16/7]" : "aspect-[4/5]"
              }`}
            >
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,white,transparent_70%)]" />
              {/* View icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-sm text-[0.65rem] uppercase tracking-[0.2em] text-white/80">
                  View
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="font-serif text-base text-yellow-300 leading-tight">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-yellow-400/55">
                {item.medium}
              </p>
              <p className="mt-0.5 text-[0.6rem] tracking-[0.18em] text-yellow-400/40">
                {item.year}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-[#0c1629] border border-white/10 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid size-8 place-items-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* Gray box image */}
              <div className="aspect-video w-full bg-gradient-to-br from-zinc-700 to-zinc-800 relative">
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,white,transparent_70%)]" />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-[0.6rem] uppercase tracking-[0.26em] text-yellow-400/60 mb-3">
                  {selectedItem.medium} · {selectedItem.year}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-yellow-300 leading-tight">
                  {selectedItem.title}
                </h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-yellow-100/60">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Page
──────────────────────────────────────────────────────────── */
export default function GalleryPage() {
  return (
    <>
      <main className="min-h-dvh bg-[#020617] text-white">
        {/* Gallery Navbar */}
        <header className="fixed left-1/2 top-5 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 sm:top-8">
          <nav
            aria-label="Gallery navigation"
            className="rounded-full border border-white/50 bg-white/78 px-3 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-8"
          >
            <ul className="flex items-center justify-between gap-2 sm:gap-7">
              {[
                { label: "home", href: "/" },
                { label: "gallery", href: "/gallery" },
                { label: "works", href: "/works" },
                { label: "contact", href: "/#contact" },
              ].map((item) => {
                const isActive = item.label === "gallery";
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative block px-2 py-1 text-[0.68rem] font-medium lowercase tracking-[0.14em] transition-colors duration-300 sm:px-3 sm:text-sm sm:tracking-[0.2em] ${
                        isActive
                          ? "text-yellow-500 after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-px after:bg-yellow-500 sm:after:left-3 sm:after:right-3"
                          : "text-stone-800 hover:text-yellow-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        {/* Gallery Header */}
        <section className="px-6 pb-8 pt-32 sm:px-10 lg:px-14">
          <SectionReveal className="mx-auto w-full max-w-7xl">
            <Link
              href="/"
              data-reveal="button"
              className="mb-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-yellow-400/65 transition-colors duration-300 hover:text-yellow-400"
            >
              <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.7} />
              Back to home
            </Link>
            <h1
              data-reveal="text"
              className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.82] tracking-[-0.045em] text-yellow-400"
            >
              Gallery
            </h1>
            <p
              data-reveal="text"
              data-reveal-delay="0.08"
              className="mt-6 max-w-xl text-sm font-light leading-relaxed text-yellow-100/60 sm:text-base"
            >
              A curated collection of my work — moments, places, and emotions
              translated through colour and texture.
            </p>
          </SectionReveal>
        </section>

        {/* Image viewer grid — below the title */}
        <section className="pb-16 pt-4">
          <ImageViewerGrid />
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="border-t border-white/8" />
        </div>

        {/* Featured section — LayoutGrid with local images */}
        <section className="py-16">
          <div className="px-6 sm:px-10 lg:px-14">
            <SectionReveal className="mx-auto w-full max-w-7xl mb-2">
              <h2
                data-reveal="text"
                className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.88] tracking-[-0.04em] text-yellow-400"
              >
                Featured Works
              </h2>
              <p
                data-reveal="text"
                data-reveal-delay="0.06"
                className="mt-4 max-w-lg text-sm font-light leading-relaxed text-yellow-100/55"
              >
                Select pieces from recent collections.
              </p>
            </SectionReveal>
          </div>
          <div className="px-6 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-7xl">
              <LayoutGrid cards={featuredCards} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
