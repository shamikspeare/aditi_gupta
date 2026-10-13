import Image from "next/image";
import { Button } from "@/components/button";
import { HeroTitle } from "@/components/hero-title";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SectionBackground } from "@/components/section-background";
import { SectionTransition } from "@/components/section-transition";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SectionReveal } from "@/components/section-reveal";
import { Navbar } from "@/components/navbar";

const featuredWorks = [
  {
    title: "Bloom Again",
    medium: "Oil on canvas",
    year: "2024",
  },
  {
    title: "Where the Light Lives",
    medium: "Oil on canvas",
    year: "2023",
  },
  {
    title: "Quiet Corners",
    medium: "Acrylic on canvas",
    year: "2024",
  },
  {
    title: "Fading Gold",
    medium: "Oil on canvas",
    year: "2023",
  },
  {
    title: "In Between",
    medium: "Mixed media",
    year: "2024",
  },
];

const commissionServices = [
  {
    title: "Custom Paintings",
    description: "Bring your ideas to life on canvas.",
  },
  {
    title: "Portraits",
    description: "Meaningful people, timelessly captured.",
  },
  {
    title: "Murals",
    description: "Transforming spaces through art.",
  },
];

export default function Home() {
  return (
    <>
      <main className="bg-[#020617] text-white">
      <Navbar />

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
        id="works"
        aria-labelledby="featured-title"
        className="featured-works-bg relative isolate min-h-dvh overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-28"
      >
        <Image
          src="/bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover object-bottom"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.18]"
        />
        <SectionTransition edge="bottom" />

        <SectionReveal className="relative z-10 mx-auto w-full max-w-[94rem]">
          <div className="mb-12 lg:mb-14">
            <h2
              id="featured-title"
              data-reveal="text"
              className="whitespace-nowrap font-serif text-[clamp(2.75rem,7vw,7rem)] leading-[0.82] tracking-[-0.045em]"
            >
              Featured Works
            </h2>
            <p
              data-reveal="text"
              data-reveal-delay="0.08"
              className="mt-6 max-w-xl text-sm font-light leading-relaxed text-yellow-100/60 sm:text-base"
            >
              A collection of paintings that reflect my perspective — moments,
              places, and emotions translated through colour and texture.
            </p>
          </div>

          <div className="no-scrollbar grid snap-x snap-mandatory grid-flow-col auto-cols-[78%] gap-4 overflow-x-auto pb-5 sm:auto-cols-[44%] lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {featuredWorks.map((work, index) => (
              <article
                key={work.title}
                data-reveal="media"
                data-reveal-delay={index * 0.07}
                className="snap-start"
              >
                <div
                  className="relative mb-4 aspect-[4/5] overflow-hidden bg-zinc-400"
                  role="img"
                  aria-label={`${work.title} image placeholder`}
                />
                <h3 className="font-serif text-base leading-tight text-yellow-300">
                  {work.title}
                </h3>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-yellow-400/65">
                  {work.medium}
                </p>
                <p className="mt-1 text-[0.62rem] tracking-[0.2em] text-yellow-400/55">
                  {work.year}
                </p>
              </article>
            ))}
          </div>

          <div
            data-reveal="button"
            className="mt-12 flex justify-center lg:mt-14"
          >
            <Button href="/gallery">Explore full portfolio</Button>
          </div>
        </SectionReveal>
      </section>

      <section
        id="vision"
        aria-labelledby="vision-title"
        className="relative isolate min-h-dvh overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-28"
      >
        <SectionBackground
          src="/bg2.webp"
          imageClassName="object-[28%_center] sm:object-center"
        />
        <SectionTransition edge="top" />
        <SectionTransition edge="bottom" />

        <SectionReveal className="relative z-10 mx-auto grid min-h-[calc(100dvh-12rem)] w-full max-w-[94rem] gap-14 lg:grid-cols-[minmax(21rem,0.95fr)_minmax(0,2.1fr)] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <h2
              id="vision-title"
              data-reveal="text"
              className="font-serif text-[clamp(3.25rem,5.6vw,6.5rem)] leading-[0.86] tracking-[-0.045em]"
            >
              <span className="block">Your Vision</span>
              <span className="block">My Canvas</span>
            </h2>
            <p
              data-reveal="text"
              data-reveal-delay="0.08"
              className="mt-7 max-w-md text-sm font-light leading-relaxed text-yellow-100/65 sm:text-base"
            >
              Custom paintings, portraits, and murals, thoughtfully created to
              bring your ideas to life. A personal and collaborative process,
              from first conversation to final artwork.
            </p>
            <div data-reveal="button" data-reveal-delay="0.14" className="mt-9">
              <Button href="#contact">Commission an artwork</Button>
            </div>
          </div>

          <div className="no-scrollbar grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-5 overflow-x-auto pb-5 sm:auto-cols-[48%] lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {commissionServices.map((service, index) => (
              <article
                key={service.title}
                data-reveal="media"
                data-reveal-delay={index * 0.09}
                className="snap-start"
              >
                <div
                  className="mb-5 aspect-[2/3] overflow-hidden bg-zinc-400"
                  role="img"
                  aria-label={`${service.title} image placeholder`}
                />
                <h3 className="font-serif text-lg leading-tight text-yellow-300">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-[0.64rem] uppercase leading-relaxed tracking-[0.2em] text-yellow-400/60">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section
        id="about"
        aria-labelledby="about-title"
        className="relative isolate min-h-dvh overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-28"
      >
        <SectionBackground
          src="/bg3.webp"
          imageClassName="object-[72%_center] sm:object-center"
        />
        <SectionTransition edge="top" />
        <SectionTransition edge="bottom" />

        <SectionReveal className="relative z-10 mx-auto grid min-h-[calc(100dvh-12rem)] w-full max-w-[82rem] grid-cols-1 gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:grid-rows-[1fr_auto] lg:items-center lg:gap-y-8">
          <div
            data-reveal="media"
            className="order-2 aspect-[5/7] w-full max-w-[32rem] justify-self-center overflow-hidden bg-zinc-400 lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1"
            role="img"
            aria-label="Artist portrait image placeholder"
          />

          <div className="order-1 max-w-2xl lg:order-none lg:col-start-2 lg:row-start-1 lg:self-end">
            <h2
              id="about-title"
              data-reveal="text"
              data-reveal-delay="0.06"
              className="font-serif text-[clamp(3.5rem,6.5vw,7rem)] leading-[0.82] tracking-[-0.045em]"
            >
              <span className="block">A Life</span>
              <span className="block">in Color</span>
            </h2>
            <div
              data-reveal="text"
              data-reveal-delay="0.14"
              className="mt-8 max-w-xl space-y-6 text-sm font-light leading-relaxed text-yellow-100/65 sm:text-base"
            >
              <p>
                I&apos;m an artist who finds inspiration in the quiet beauty of
                everyday moments — in places, people, and the emotions they
                evoke. Through my work, I explore the balance between reality
                and feeling, using colour, texture, and light to tell stories
                that feel personal and timeless.
              </p>
              <p>
                Over the years, I&apos;ve had the privilege of creating artworks
                for private collectors, exhibitions, and meaningful
                collaborations, each experience shaping my artistic journey.
              </p>
            </div>
          </div>

          <div
            data-reveal="button"
            data-reveal-delay="0.2"
            className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-start"
          >
            <Button href="#about">Learn more about me</Button>
          </div>
        </SectionReveal>
      </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
