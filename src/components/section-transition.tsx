type SectionTransitionProps = {
  edge: "top" | "bottom";
};

export function SectionTransition({ edge }: SectionTransitionProps) {
  const gradientClass =
    edge === "top"
      ? "top-0 bg-[linear-gradient(to_bottom,#020617_0%,rgba(2,6,23,0.92)_24%,rgba(2,6,23,0.48)_58%,transparent_100%)]"
      : "bottom-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(2,6,23,0.48)_42%,rgba(2,6,23,0.92)_76%,#020617_100%)]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-[5] h-36 sm:h-48 ${gradientClass}`}
    />
  );
}
