import Image from "next/image";

// Arrow between cards — points right on desktop, points down on mobile
export function Arrow() {
  return (
    <div className="py-4 px-0 sm:px-1 md:px-3 lg:px-5 xl:px-8 min-[1430px]:px-[45px]">
      <Image
        src="/right-arrow.svg"
        alt="arrow"
        width={52}
        height={46}
        className="w-8 md:w-10 lg:w-[52px] rotate-90 md:rotate-0"
      />
    </div>
  );
}
