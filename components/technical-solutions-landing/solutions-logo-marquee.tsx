import Image from "next/image";
import { LOGO_MARQUEE_SRCS } from "./data";

function LogoRow({ rowKey }: { rowKey: string }) {
  return (
    <>
      {LOGO_MARQUEE_SRCS.map((src, index) => (
        <Image
          key={`${rowKey}-${index}-${src}`}
          loading="eager"
          src={src}
          alt=""
          width={96}
          height={48}
          className="inline-block brightness-[0%] max-w-24 h-auto w-24 object-contain"
        />
      ))}
    </>
  );
}

export function SolutionsLogoMarquee() {
  return (
    <div className="max-sm:-mt-40 bg-brand-ink relative -mt-28 py-8 rounded-[30px] max-sm:mx-5 mb-20 mx-16">
      <div className="overflow-x-hidden overflow-y-hidden">
        <div className="flex relative group">
          <div className="gap-x-20 gap-y-20 flex-none items-center animate-[30s_linear_infinite_scroll] flex pl-20 group-hover:[animation-play-state:paused]">
            <LogoRow rowKey="a" />
          </div>
          <div className="gap-x-20 gap-y-20 flex-none items-center animate-[30s_linear_infinite_scroll] flex pl-20 group-hover:[animation-play-state:paused]">
            <LogoRow rowKey="b" />
          </div>
          <div className="before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both" />
          <div className="bg-[linear-gradient(to_right,#0e0c1500)] w-20 absolute left-[0%] inset-y-[0%]" />
          <div className="bg-[linear-gradient(to_right,#0e0c1500)] w-20 absolute rotate-180 right-[0%] inset-y-[0%]" />
        </div>
      </div>
    </div>
  );
}
