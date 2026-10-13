"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const words = ["aditi", "gupta"];

export function HeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const wordsToReveal = title.querySelectorAll("[data-hero-word]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(wordsToReveal, { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        wordsToReveal,
        {
          autoAlpha: 0,
          rotate: 2,
          yPercent: 115,
        },
        {
          autoAlpha: 1,
          rotate: 0,
          yPercent: 0,
          duration: 1.35,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.2,
        },
      );
    }, title);

    return () => context.revert();
  }, []);

  return (
    <h1
      ref={titleRef}
      id="hero-title"
      className="hero-title font-hero translate-y-3 text-center text-[clamp(4.5rem,10vw,9rem)] font-normal italic leading-[0.9] tracking-[0.01em] text-[#fffaf2] drop-shadow-[0_4px_14px_rgba(0,0,0,0.38)]"
    >
      <span className="sr-only">aditi gupta</span>
      <span
        aria-hidden="true"
        className="inline-flex flex-wrap justify-center gap-x-[0.2em]"
      >
        {words.map((word) => (
          <span key={word} className="overflow-hidden pb-[0.12em]">
            <span data-hero-word className="inline-block will-change-transform">
              {word}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}
