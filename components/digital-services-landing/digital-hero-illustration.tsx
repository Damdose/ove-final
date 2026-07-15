"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ACCENT = "#10b981";
const ACCENT_LIGHT = "#34d399";
const INK = "#0D0B4A";

const PHOTO =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop";

export function DigitalHeroIllustration() {
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
        <div className="absolute left-[0%] top-[5%] h-[55%] w-[55%] rounded-full blur-[80px]" style={{ backgroundColor: ACCENT, opacity: 0.22 }} />
        <div className="absolute right-[0%] top-[10%] h-[50%] w-[45%] rounded-full blur-[80px]" style={{ backgroundColor: ACCENT_LIGHT, opacity: 0.16 }} />
        <div className="absolute bottom-[0%] left-[15%] h-[45%] w-[55%] rounded-full blur-[80px]" style={{ backgroundColor: "#059669", opacity: 0.12 }} />
      </div>

      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-[1.5rem] transition-all duration-700 ease-out ${vis}`}
        style={{
          transitionDelay: "100ms",
          boxShadow: `0 30px 70px -20px rgba(13,11,74,0.22),
                      -16px 16px 50px -25px ${ACCENT}45,
                      16px 16px 50px -25px ${ACCENT_LIGHT}40`,
        }}
      >
        <Image
          src={PHOTO}
          alt="Dashboard d'analytics et données marketing digital"
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
          <div className="flex-1" style={{ backgroundColor: "#059669" }} />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 sm:px-7 sm:pb-7">
          <div>
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.25em] text-white/40">Pôle Digital</p>
            <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">OVEDEX</p>
          </div>
          <div className="flex gap-2">
            <ServiceChip label="Web" />
            <ServiceChip label="SEO" />
            <ServiceChip label="Branding" />
          </div>
        </div>
      </div>

      {/* Floating card — SEO & Référencement */}
      <div
        className={`absolute -left-[8%] top-[10%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_infinite]">
          <ServiceCard
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            }
            title="SEO & Référencement"
            desc="Visibilité & trafic qualifié"
          />
        </div>
      </div>

      {/* Floating card — Création web */}
      <div
        className={`absolute -right-[7%] top-[5%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_2.3s_infinite]">
          <ServiceCard
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
            title="Création Web"
            desc="Sites & e-commerce"
          />
        </div>
      </div>

      {/* Floating card — Marketing */}
      <div
        className={`absolute -bottom-[10%] right-[8%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_4.5s_infinite]">
          <ServiceCard
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
            title="Marketing Digital"
            desc="Campagnes & contenu"
          />
        </div>
      </div>

      {/* Badge performance */}
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
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </span>
            <span className="text-[0.65rem] font-bold text-slate-700">Performance & ROI</span>
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
