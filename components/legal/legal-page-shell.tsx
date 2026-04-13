import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingSiteLayout } from "@/components/technology-group-home/marketing-site-layout";
import { BD_CARD, INK, PAGE_X, R_CARD, SHADOW_SURFACE } from "@/lib/home-ui";

const legalNav = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
  { href: "/conditions-generales-de-vente", label: "CGV" },
] as const;

type LegalPageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function LegalPageShell({ title, description, children }: LegalPageShellProps) {
  return (
    <MarketingSiteLayout>
      <div className={`mx-auto w-full max-w-3xl py-12 sm:py-16 lg:py-20 ${PAGE_X}`}>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#0D0B4A]">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">{description}</p>
        ) : null}

        <article
          className={`mt-10 ${R_CARD} ${BD_CARD} bg-white p-6 ${SHADOW_SURFACE} sm:p-8`}
          style={{ color: INK }}
        >
          <div className="space-y-6 text-sm leading-relaxed text-neutral-700 sm:text-base">{children}</div>
        </article>

        <nav
          aria-label="Pages légales"
          className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-neutral-600"
        >
          {legalNav.map((item, i) => (
            <span key={item.href} className="inline-flex items-center gap-x-2">
              {i > 0 ? (
                <span className="select-none text-neutral-300" aria-hidden>
                  ·
                </span>
              ) : null}
              <Link href={item.href} className="font-medium text-[#0D0B4A] underline-offset-2 hover:underline">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </MarketingSiteLayout>
  );
}
