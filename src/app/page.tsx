import Image from "next/image";
import { Button } from "@/components/button";
import { ContactSection } from "@/components/contact-section";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { HeroTitle } from "@/components/hero-title";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SectionBackground } from "@/components/section-background";
import { SectionReveal } from "@/components/section-reveal";
import { SectionTransition } from "@/components/section-transition";
import { SiteFooter } from "@/components/site-footer";

const commissionSteps = [
  "You reach out to me with your idea, vision, or reference image.",
  "I’ll review it and share my inputs on how I’ll approach the commission.",
  "We both agree on the direction for the artwork.",
  "I’ll share my price chart based on the medium, surface, and size.",
  "A minimum advance of 30% of the total amount is required as security before I begin the work.",
  "I’ll keep sharing progress and finished artwork pictures. Once the balance is paid, I’ll ship the work to your desired place.",
];

const galleryArtworks = [
  {
    src: "/artwork/artwork-01.png",
    alt: "Moon phase commission painting displayed among trailing plants",
    width: 1179,
    height: 1519,
  },
  {
    src: "/artwork/artwork-02.png",
    alt: "Hand-painted coastal postcards prepared as a gift",
    width: 910,
    height: 1600,
  },
  {
    src: "/artwork/artwork-03.png",
    alt: "Mountain campfire commission painted on canvas",
    width: 1179,
    height: 1362,
  },
  {
    src: "/artwork/artwork-04.png",
    alt: "Miniature mountain painting displayed on a phone case",
    width: 1160,
    height: 1600,
  },
  {
    src: "/artwork/artwork-05.png",
    alt: "Custom sneaker painting on a coral canvas",
    width: 1104,
    height: 1600,
  },
  {
    src: "/artwork/artwork-06.png",
    alt: "Custom portrait of two friends overlooking the sea",
    width: 1166,
    height: 1600,
  },
  {
    src: "/artwork/artwork-07.png",
    alt: "Lily pond painting held beside an artist palette",
    width: 1280,
    height: 1280,
  },
  {
    src: "/artwork/artwork-08.png",
    alt: "Volcano and coastline painting resting against a wall",
    width: 900,
    height: 1600,
  },
  {
    src: "/artwork/artwork-09.png",
    alt: "Moody kitchen painting displayed in a wall collage",
    width: 1202,
    height: 1600,
  },
  {
    src: "/artwork/artwork-10.png",
    alt: "Warm-toned house study painted in a sketchbook",
    width: 900,
    height: 1600,
  },
  {
    src: "/artwork/artwork-11.png",
    alt: "Volcano and coastline painting viewed from the side",
    width: 900,
    height: 1600,
  },
  {
    src: "/artwork/artwork-12.png",
    alt: "Sunset triptych painting on black canvas",
    width: 900,
    height: 1600,
  },
  {
    src: "/artwork/artwork-13.png",
    alt: "Garden and home painting on an unstretched canvas",
    width: 900,
    height: 1600,
  },
  {
    src: "/artwork/artwork-14.png",
    alt: "Burning city building painting displayed on an easel",
    width: 1200,
    height: 1600,
  },
  {
    src: "/artwork/artwork-15.png",
    alt: "Small night tree painting on a deep blue ground",
    width: 1600,
    height: 1600,
  },
  {
    src: "/artwork/artwork-16.png",
    alt: "Small painting of a glowing star among dark trees",
    width: 1600,
    height: 1600,
  },
  {
    src: "/artwork/artwork-17.png",
    alt: "Silhouette surrounded by fire in a night landscape",
    width: 1600,
    height: 1600,
  },
  {
    src: "/artwork/artwork-18.png",
    alt: "Two figures sitting beside a bonfire at night",
    width: 1200,
    height: 1600,
  },
] as const;

const commissionArtworks = [galleryArtworks[0], galleryArtworks[2]] as const;

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden bg-[#020617] text-white">
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-stone-950 px-6 pb-16 pt-28"
        >
          <Image
            src="/hero3.jpeg"
            alt="Aditi Gupta surrounded by her artwork and painting palette"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,transparent_24%,rgba(5,15,35,0.25)_57%,rgba(2,6,23,0.88)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.32)_0%,rgba(2,6,23,0.06)_28%,rgba(2,6,23,0.12)_48%,rgba(2,8,30,0.56)_72%,rgba(2,6,23,0.97)_100%)]"
          />
          <div
            aria-hidden="true"
            className="hero-grain pointer-events-none absolute inset-0 -z-[5]"
          />

          <HeroTitle />
          <ScrollIndicator />
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="relative isolate flex min-h-[82dvh] items-center overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-32"
        >
          <SectionBackground
            src="/bg3.webp"
            mobileSrc="/bg3-mobile.webp"
          />
          <SectionTransition edge="top" />
          <SectionTransition edge="bottom" />

          <SectionReveal className="relative z-10 mx-auto grid w-full max-w-[82rem] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div className="lg:order-2">
              <p
                data-reveal="text"
                className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-yellow-400/65"
              >
                The artist
                <span className="h-px w-10 bg-yellow-400/45" />
              </p>
              <h2
                id="about-title"
                data-reveal="text"
                data-reveal-delay="0.06"
                className="mt-7 font-serif text-[clamp(3.7rem,8vw,8rem)] leading-[0.82] tracking-[-0.05em]"
              >
                About Me
              </h2>
              <p
                data-reveal="text"
                data-reveal-delay="0.12"
                className="mt-9 max-w-4xl text-base font-light leading-[1.85] text-yellow-100/72 sm:text-lg lg:text-xl"
              >
                Hello! I’m Aditi Gupta, an artist based in Delhi with a passion
                for experimenting on canvas, paper, and unconventional surfaces.
                Through my art and creative content, I’m constantly exploring
                new mediums and finding fresh ways to express and expand my
                ideas.
              </p>
            </div>

            <figure
              data-reveal="media"
              data-reveal-delay="0.08"
              className="overflow-hidden lg:order-1"
            >
              <Image
                src="/about-aditi.png"
                alt="Portrait of Aditi Gupta in a sunlit courtyard"
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-auto w-full"
              />
            </figure>
          </SectionReveal>
        </section>

        <section
          id="commissions"
          aria-labelledby="commissions-title"
          className="relative isolate overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-32"
        >
          <SectionBackground
            src="/bg2.webp"
            mobileSrc="/bg2-mobile.webp"
          />
          <SectionTransition edge="top" />
          <SectionTransition edge="bottom" />

          <SectionReveal className="relative z-10 mx-auto w-full max-w-[94rem]">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(20rem,0.9fr)_minmax(0,1.55fr)] lg:gap-16 xl:gap-24">
              <div className="max-w-2xl">
                <p
                  data-reveal="text"
                  className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-yellow-400/65"
                >
                  Made for you
                  <span className="h-px w-10 bg-yellow-400/45" />
                </p>
                <h2
                  id="commissions-title"
                  data-reveal="text"
                  data-reveal-delay="0.06"
                  className="mt-7 font-serif text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.82] tracking-[-0.05em]"
                >
                  Commissions
                </h2>
                <p
                  data-reveal="text"
                  data-reveal-delay="0.12"
                  className="mt-8 text-sm font-light leading-[1.85] text-yellow-100/70 sm:text-base"
                >
                  I’m open to all kinds of commissions, from album covers to
                  gifts and dream places to wedding memories and anything close
                  to your heart. The only catch is that I create each piece in
                  my own style and expertise. I always aim to leave clients
                  happy with a piece they’ll remember as uniquely mine.
                </p>
              </div>

              <div className="no-scrollbar grid snap-x snap-mandatory grid-flow-col auto-cols-[78%] items-start gap-4 overflow-x-auto pb-4 sm:auto-cols-[46%] lg:grid-flow-row lg:grid-cols-2 lg:overflow-visible lg:pb-0">
                {commissionArtworks.map((artwork, index) => (
                  <figure
                    key={artwork.src}
                    data-reveal="media"
                    data-reveal-delay={index * 0.08}
                    className="snap-start overflow-hidden"
                  >
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      width={artwork.width}
                      height={artwork.height}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                      className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.015]"
                    />
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-10 border-t border-yellow-400/20 pt-12 lg:grid-cols-[minmax(14rem,0.55fr)_minmax(0,1.45fr)] lg:gap-16">
              <h3
                data-reveal="text"
                className="font-serif text-3xl leading-tight text-yellow-300 sm:text-4xl"
              >
                The process is simple
              </h3>

              <div className="min-w-0">
                <ol className="grid gap-0">
                  {commissionSteps.map((step, index) => (
                    <li
                      key={step}
                      data-reveal="text"
                      data-reveal-delay={Math.min(index * 0.04, 0.2)}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-yellow-400/15 py-5 text-sm font-light leading-relaxed text-yellow-100/70 sm:grid-cols-[3rem_1fr] sm:text-base"
                    >
                      <span className="font-serif text-lg text-yellow-400/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <div
                  data-reveal="text"
                  className="mt-9 space-y-5 text-sm leading-relaxed sm:text-base"
                >
                  <p className="font-semibold text-yellow-300">
                    P.S. Please contact me at least 10 days before you need the
                    artwork.
                  </p>
                  <div className="space-y-2 text-yellow-100/70">
                    <p className="font-semibold text-yellow-200">
                      I also sell my pre-made works, stickers, and prints, which
                      are available through my Instagram posts and the gallery
                      here.
                    </p>
                    <p>You can DM or email me to buy those.</p>
                  </div>
                </div>

                <div data-reveal="button" className="mt-9">
                  <Button href="#contact">Start a commission</Button>
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        <section
          id="gallery"
          aria-labelledby="gallery-title"
          className="relative isolate overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-32"
        >
          <SectionBackground
            src="/bg.webp"
            mobileSrc="/bg-mobile.webp"
          />
          <SectionTransition edge="top" />
          <SectionTransition edge="bottom" />

          <SectionReveal className="relative z-10 mx-auto w-full max-w-[94rem]">
            <p
              data-reveal="text"
              className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-yellow-400/65"
            >
              Selected work
              <span className="h-px w-10 bg-yellow-400/45" />
            </p>
            <h2
              id="gallery-title"
              data-reveal="text"
              data-reveal-delay="0.06"
              className="mt-7 font-serif text-[clamp(3.7rem,8vw,8rem)] leading-[0.82] tracking-[-0.05em]"
            >
              Gallery
            </h2>

            <GalleryLightbox artworks={galleryArtworks} />
          </SectionReveal>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
