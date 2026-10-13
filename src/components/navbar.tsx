"use client";

import { useLayoutEffect, useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

const navigation = [
  { label: "home", href: "#home", sectionId: "home" },
  { label: "gallery", href: "/gallery", sectionId: null },
  { label: "works", href: "#works", sectionId: "works" },
  { label: "contact", href: "#contact", sectionId: "contact" },
];

const sectionIds = ["home", "works", "vision", "about", "contact"];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("home");

  // Reveal animation — synced with hero title
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(nav, { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        nav,
        {
          autoAlpha: 0,
          yPercent: -100,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.6, // after hero title finishes (~1.35s + 0.2s delay)
        },
      );
    });

    return () => context.revert();
  }, []);

  // Scroll-based active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Find the section with the highest intersection ratio
            let maxRatio = 0;
            let topSection = "home";

            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                topSection = sectionId;
              }
            });

            // Map vision and about to their closest nav item
            if (topSection === "vision" || topSection === "about") {
              topSection = "works";
            }

            setActiveSection(topSection);
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: "-10% 0px -10% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navigation)[0]) => {
      // For gallery link, let the default navigation happen
      if (!item.sectionId) return;

      e.preventDefault();
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Immediately set active so user gets instant feedback
        setActiveSection(item.sectionId);
      }
    },
    [],
  );

  return (
    <header
      ref={navRef}
      className="fixed left-1/2 top-5 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 sm:top-8"
      style={{ visibility: "hidden" }}
    >
      <nav
        aria-label="Main navigation"
        className="rounded-full border border-white/50 bg-white/78 px-3 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-8"
      >
        <ul className="flex items-center justify-between gap-2 sm:gap-7">
          {navigation.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative block px-2 py-1 text-[0.68rem] font-medium lowercase tracking-[0.14em] transition-colors duration-300 sm:px-3 sm:text-sm sm:tracking-[0.2em] ${
                    isActive
                      ? "text-yellow-500 after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-px after:bg-yellow-500 sm:after:left-3 sm:after:right-3"
                      : "text-stone-800 hover:text-yellow-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
