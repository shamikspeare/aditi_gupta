"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <a
      href="#works"
      aria-label="Scroll to featured works"
      className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[#fffaf2] sm:bottom-8"
    >
      <span className="whitespace-nowrap font-serif text-[0.6rem] lowercase tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)] sm:text-[0.65rem]">
        scroll down
      </span>
      <motion.span
        aria-hidden="true"
        className="flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]"
        animate={shouldReduceMotion ? undefined : { y: 8 }}
        transition={{
          type: "spring",
          stiffness: 125,
          damping: 6,
          mass: 0.65,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.22,
        }}
      >
        <ChevronDown className="h-7 w-7" strokeWidth={1.5} />
      </motion.span>
    </a>
  );
}
