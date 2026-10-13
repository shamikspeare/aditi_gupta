import type { ReactNode } from "react";
import { MoveRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  className?: string;
};

export function Button({
  children,
  href,
  type = "button",
  ariaLabel,
  className = "",
}: ButtonProps) {
  const styles = `group inline-flex items-center justify-center gap-5 rounded-full bg-white px-9 py-4 font-serif text-sm tracking-[0.12em] text-black shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_16px_38px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <MoveRight
        aria-hidden="true"
        className="h-6 w-8 shrink-0 text-black transition-transform duration-300 group-hover:translate-x-1.5"
        strokeWidth={1.75}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={styles}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} aria-label={ariaLabel} className={styles}>
      {content}
    </button>
  );
}
