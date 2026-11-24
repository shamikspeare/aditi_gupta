import { getImageProps } from "next/image";

type SectionBackgroundProps = {
  src: string;
  mobileSrc: string;
  imageClassName?: string;
};

export function SectionBackground({
  src,
  mobileSrc,
  imageClassName = "object-center",
}: SectionBackgroundProps) {
  const common = { alt: "", sizes: "100vw" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src,
    width: 1672,
    height: 941,
  });
  const {
    props: { srcSet: mobileSrcSet, ...mobileImageProps },
  } = getImageProps({
    ...common,
    src: mobileSrc,
    width: 941,
    height: 1672,
  });

  return (
    <>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
        <img
          {...mobileImageProps}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 z-0 h-full w-full object-cover ${imageClassName}`}
        />
      </picture>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.18]"
      />
    </>
  );
}
