import Image from "next/image";

type SectionBackgroundProps = {
  src: string;
  imageClassName?: string;
};

export function SectionBackground({
  src,
  imageClassName = "object-center",
}: SectionBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={`z-0 object-cover ${imageClassName}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.18]"
      />
    </>
  );
}
