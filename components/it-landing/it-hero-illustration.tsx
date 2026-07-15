"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ACCENT = "#a855f7";
const ACCENT_LIGHT = "#c084fc";
const INK = "#0D0B4A";

const PHOTO =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85&auto=format&fit=crop";

export function ItHeroIllustration() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  const vis = show
    ? "translate-y-0 opacity-100 scale-100"
    : "translate-y-6 opacity-0 scale-[0.96]";

  return (
    <div className="relative mx-auto w-full max-w-[680px] select-none" aria-hidden>
      {/* Glows */}
      <div className="absolute -inset-10 -z-10">
        <div className="absolute left-[0%] top-[5%] h-[55%] w-[55%] rounded-full blur-[80px]" style={{ backgroundColor: ACCENT, opacity: 0.2 }} />
        <div className="absolute right-[0%] top-[10%] h-[50%] w-[45%] rounded-full blur-[80px]" style={{ backgroundColor: ACCENT_LIGHT, opacity: 0.16 }} />
        <div className="absolute bottom-[0%] left-[15%] h-[45%] w-[55%] rounded-full blur-[80px]" style={{ backgroundColor: "#7c3aed", opacity: 0.13 }} />
      </div>

      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-[1.5rem] transition-all duration-700 ease-out ${vis}`}
        style={{
          transitionDelay: "100ms",
          boxShadow: `0 30px 70px -20px rgba(13,11,74,0.25),
                      -16px 16px 50px -25px ${ACCENT}45,
                      16px 16px 50px -25px ${ACCENT_LIGHT}40`,
        }}
      >
        <Image
          src={PHOTO}
          alt="Salle de serveurs et infrastructure réseau"
          width={1200}
          height={800}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-square w-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${INK}cc 0%, ${INK}55 30%, transparent 60%)` }} />

        {/* Accent bar */}
        <div className="absolute bottom-0 left-0 right-0 flex h-[3px]">
          <div className="flex-1" style={{ backgroundColor: ACCENT }} />
          <div className="flex-1" style={{ backgroundColor: ACCENT_LIGHT }} />
          <div className="flex-1" style={{ backgroundColor: "#7c3aed" }} />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 sm:px-7 sm:pb-7">
          <div>
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.25em] text-white/40">Pôle IT</p>
            <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">OVEDEX</p>
          </div>
          <div className="flex gap-2">
            <ServiceChip label="Cloud" />
            <ServiceChip label="Cyber" />
            <ServiceChip label="Infra" />
          </div>
        </div>
      </div>

      {/* Floating card — Cybersécurité */}
      <div
        className={`absolute -left-[8%] top-[10%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_infinite]">
          <ServiceCard
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            }
            title="Cybersécurité"
            desc="Protection & conformité"
          />
        </div>
      </div>

      {/* Floating card — Cloud & Infra */}
      <div
        className={`absolute -right-[7%] top-[5%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_2.3s_infinite]">
          <ServiceCard
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            }
            title="Cloud & Infra"
            desc="Migration & hébergement"
          />
        </div>
      </div>

      {/* Floating card — Infogérance */}
      <div
        className={`absolute -bottom-[10%] right-[8%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_4.5s_infinite]">
          <ServiceCard
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
            }
            title="Infogérance"
            desc="Supervision & support 24/7"
          />
        </div>
      </div>

      {/* Badge uptime */}
      <div
        className={`absolute -bottom-[4%] left-[5%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "1000ms" }}
      >
        <div className="animate-[float_6s_ease-in-out_3s_infinite]">
          <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3.5 py-2 shadow-[0_8px_28px_-8px_rgba(13,11,74,0.14)] backdrop-blur-xl">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{ backgroundColor: ACCENT }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="text-[0.65rem] font-bold text-slate-700">99,9 % uptime garanti</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceChip({ label }: { label: string }) {
  return (
    <span
      className="rounded-full px-2.5 py-1 text-[0.55rem] font-bold tracking-wide text-white backdrop-blur-md"
      style={{ backgroundColor: `${ACCENT}55`, border: `1px solid ${ACCENT}88` }}
    >
      {label}
    </span>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex w-[185px] items-center gap-3 rounded-2xl border bg-white/90 p-3.5 backdrop-blur-xl"
      style={{
        borderColor: `${ACCENT}30`,
        boxShadow: `0 12px 36px -8px ${ACCENT}28, 0 4px 16px -6px rgba(15,23,42,0.08)`,
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: ACCENT }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[0.7rem] font-bold text-[#0F172A]">{title}</p>
        <p className="text-[0.5rem] font-medium leading-snug text-slate-400">{desc}</p>
      </div>
    </div>
  );
}
