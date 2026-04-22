"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Hero Illustration — Photo + 3 pôles OVEDEX                        */
/*  Digital #34d399 · Solutions #60a5fa · IT #c084fc                   */
/*  Couleurs saturées, pas de chiffres                                 */
/* ------------------------------------------------------------------ */

const DIGITAL = "#10b981";
const SOLUTIONS = "#3b82f6";
const IT = "#a855f7";
const INK = "#0D0B4A";

const PHOTO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format&fit=crop";

export function HeroIllustration() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  const vis = show
    ? "translate-y-0 opacity-100 scale-100"
    : "translate-y-6 opacity-0 scale-[0.96]";

  return (
    <div className="relative mx-auto w-full max-w-[560px] select-none" aria-hidden>
      {/* ===== GLOWS 3 couleurs ===== */}
      <div className="absolute -inset-10 -z-10">
        <div className="absolute left-[0%] top-[8%] h-[55%] w-[50%] rounded-full blur-[80px]" style={{ backgroundColor: DIGITAL, opacity: 0.18 }} />
        <div className="absolute right-[0%] top-[0%] h-[50%] w-[45%] rounded-full blur-[80px]" style={{ backgroundColor: SOLUTIONS, opacity: 0.16 }} />
        <div className="absolute bottom-[0%] left-[20%] h-[50%] w-[55%] rounded-full blur-[80px]" style={{ backgroundColor: IT, opacity: 0.15 }} />
      </div>

      {/* ===== IMAGE ===== */}
      <div
        className={`relative overflow-hidden rounded-[1.5rem] transition-all duration-700 ease-out ${vis}`}
        style={{
          transitionDelay: "100ms",
          boxShadow: `0 30px 70px -20px rgba(13,11,74,0.25),
                      -16px 16px 50px -25px ${DIGITAL}50,
                      16px 16px 50px -25px ${SOLUTIONS}50,
                      0 35px 55px -25px ${IT}40`,
        }}
      >
        <Image
          src={PHOTO}
          alt=""
          width={1200}
          height={800}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-[4/3] w-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${INK}cc 0%, ${INK}55 30%, transparent 60%)` }} />

        {/* Bande tricolore */}
        <div className="absolute bottom-0 left-0 right-0 flex h-[3px]">
          <div className="flex-1" style={{ backgroundColor: DIGITAL }} />
          <div className="flex-1" style={{ backgroundColor: SOLUTIONS }} />
          <div className="flex-1" style={{ backgroundColor: IT }} />
        </div>

        {/* Contenu bas */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 sm:px-7 sm:pb-7">
          <div>
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.25em] text-white/40">Groupe technologique</p>
            <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">OVEDEX</p>
          </div>
          <div className="flex gap-2">
            <PoleChip label="Digital" color={DIGITAL} />
            <PoleChip label="Solutions" color={SOLUTIONS} />
            <PoleChip label="IT" color={IT} />
          </div>
        </div>
      </div>

      {/* ===== CARTE — Digital ===== */}
      <div
        className={`absolute -left-[8%] top-[12%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_infinite]">
          <PoleCard
            color={DIGITAL}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
            title="Digital"
            desc="Stratégie web, SEO & branding"
          />
        </div>
      </div>

      {/* ===== CARTE — Solutions ===== */}
      <div
        className={`absolute -right-[7%] top-[5%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_2.3s_infinite]">
          <PoleCard
            color={SOLUTIONS}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            }
            title="Solutions"
            desc="Sûreté, sécurité & télécoms"
          />
        </div>
      </div>

      {/* ===== CARTE — IT ===== */}
      <div
        className={`absolute -bottom-[8%] -right-[4%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="animate-[float_7s_ease-in-out_4.5s_infinite]">
          <PoleCard
            color={IT}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
            }
            title="IT"
            desc="Infogérance & cloud"
          />
        </div>
      </div>

      {/* ===== BADGE SYNERGIE ===== */}
      <div
        className={`absolute -bottom-[4%] left-[5%] z-20 transition-all duration-700 ease-out ${vis}`}
        style={{ transitionDelay: "1000ms" }}
      >
        <div className="animate-[float_6s_ease-in-out_3s_infinite]">
          <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3.5 py-2 shadow-[0_8px_28px_-8px_rgba(13,11,74,0.14)] backdrop-blur-xl">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{ background: `linear-gradient(135deg, ${DIGITAL}, ${SOLUTIONS}, ${IT})` }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="text-[0.65rem] font-bold text-slate-700">3 pôles · 1 synergie</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function PoleChip({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="rounded-full px-2.5 py-1 text-[0.55rem] font-bold tracking-wide text-white backdrop-blur-md"
      style={{ backgroundColor: `${color}55`, border: `1px solid ${color}88` }}
    >
      {label}
    </span>
  );
}

function PoleCard({
  color,
  icon,
  title,
  desc,
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex w-[175px] items-center gap-3 rounded-2xl border bg-white/90 p-3.5 backdrop-blur-xl"
      style={{
        borderColor: `${color}30`,
        boxShadow: `0 12px 36px -8px ${color}28, 0 4px 16px -6px rgba(15,23,42,0.08)`,
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[0.7rem] font-bold text-[#0F172A]">{title}</p>
        <p className="text-[0.5rem] leading-snug text-slate-400 font-medium">{desc}</p>
      </div>
    </div>
  );
}
