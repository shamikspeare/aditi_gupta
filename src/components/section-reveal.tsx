"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(targets, { clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      targets.forEach((target) => {
        const revealType = target.dataset.reveal ?? "text";
        const delay = Number(target.dataset.revealDelay ?? 0);
        const fromVars =
          revealType === "media"
            ? { autoAlpha: 0, y: 48, scale: 0.965 }
            : revealType === "button"
              ? { autoAlpha: 0, y: 24 }
              : {
                  autoAlpha: 0,
                  clipPath: "inset(0% 0% 100% 0%)",
                  y: 34,
                };

        gsap.fromTo(target, fromVars, {
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          scale: 1,
          duration: revealType === "button" ? 0.72 : 0.92,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, root);

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
