import { ArrowUp } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-yellow-400 px-6 text-[#020617] sm:px-10 lg:px-14">
      <SectionReveal className="mx-auto w-full max-w-[94rem] py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal="text">
            <a
              href="/"
              className="font-hero text-6xl leading-none sm:text-7xl"
              aria-label="Aditi Gupta, back to home"
            >
              aditi gupta
            </a>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#020617]/65">
              Artist · Mumbai, India
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            data-reveal="text"
            data-reveal-delay="0.08"
          >
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.18em]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-opacity duration-300 hover:opacity-55"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          data-reveal="text"
          data-reveal-delay="0.14"
          className="mt-10 flex flex-col gap-4 border-t border-[#020617]/25 pt-6 text-[0.65rem] uppercase tracking-[0.18em] text-[#020617]/65 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 Aditi Gupta. All rights reserved.</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#020617] transition-opacity duration-300 hover:opacity-55"
          >
            Back to top
            <ArrowUp aria-hidden="true" className="size-4" strokeWidth={1.8} />
          </a>
        </div>
      </SectionReveal>
    </footer>
  );
}
