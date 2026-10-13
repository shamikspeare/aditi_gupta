import { Camera, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { SectionBackground } from "@/components/section-background";
import { SectionTransition } from "@/components/section-transition";
import { SectionReveal } from "@/components/section-reveal";

const contactDetails = [
  {
    label: "Email",
    value: "artistname@email.com",
    icon: Mail,
  },
  {
    label: "Based in",
    value: "Mumbai, India",
    icon: MapPin,
  },
  {
    label: "Follow my journey",
    value: "@artistname",
    icon: Camera,
  },
];

const fieldStyles =
  "w-full border border-white/15 bg-zinc-300 px-5 py-4 text-sm text-slate-950 outline-none placeholder:text-slate-600 transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate min-h-dvh overflow-hidden px-6 py-24 text-yellow-400 sm:px-10 lg:px-14 lg:py-28"
    >
      <SectionBackground
        src="/bg4.webp"
        imageClassName="object-[58%_center] sm:object-center"
      />
      <SectionTransition edge="top" />

      <SectionReveal className="relative z-10 mx-auto grid min-h-[calc(100dvh-12rem)] w-full max-w-[82rem] gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1fr)] lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p
            data-reveal="text"
            className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-yellow-400/65"
          >
            Get in touch
            <span className="h-px w-10 bg-yellow-400/45" />
          </p>
          <h2
            id="contact-title"
            data-reveal="text"
            data-reveal-delay="0.06"
            className="mt-8 font-serif text-[clamp(3.2rem,5.8vw,6.5rem)] leading-[0.84] tracking-[-0.045em]"
          >
            <span className="block">Let&apos;s Create</span>
            <span className="block">
              Something <em className="font-normal text-yellow-300">Meaningful</em>
            </span>
          </h2>
          <p
            data-reveal="text"
            data-reveal-delay="0.12"
            className="mt-8 max-w-md text-sm font-light leading-relaxed text-yellow-100/65 sm:text-base"
          >
            I&apos;m always open to new projects, collaborative ideas, and
            conversations. Whether you&apos;re interested in a commissioned piece
            or simply want to say hello, I&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-5">
            {contactDetails.map(({ label, value, icon: Icon }, index) => (
              <div
                key={label}
                data-reveal="text"
                data-reveal-delay={0.06 * index}
                className="flex items-center gap-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-yellow-400/25 bg-[#020617] text-yellow-300">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-yellow-400/55">
                    {label}
                  </p>
                  <p className="mt-1 font-serif text-base text-yellow-100/80">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal="media"
          data-reveal-delay="0.1"
          className="bg-[#081426] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-9 lg:p-10"
        >
          <p className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-yellow-400/65">
            Send a message
            <span className="h-px w-10 bg-yellow-400/45" />
          </p>

          <form className="mt-8 grid gap-3" aria-label="Contact form">
            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  autoComplete="name"
                  className={fieldStyles}
                />
              </label>
              <label>
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  autoComplete="email"
                  className={fieldStyles}
                />
              </label>
            </div>
            <label>
              <span className="sr-only">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={fieldStyles}
              />
            </label>
            <label>
              <span className="sr-only">Your message</span>
              <textarea
                name="message"
                placeholder="Your message *"
                rows={6}
                className={`${fieldStyles} resize-y`}
              />
            </label>
            <div
              data-reveal="button"
              data-reveal-delay="0.16"
              className="mt-3"
            >
              <Button type="button" className="w-full">
                Send message
              </Button>
            </div>
            <p className="mt-2 text-center text-xs font-light text-yellow-100/50">
              I&apos;ll get back to you as soon as possible.
            </p>
          </form>
        </div>
      </SectionReveal>
    </section>
  );
}
