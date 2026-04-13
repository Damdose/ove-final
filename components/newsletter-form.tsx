"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("ok");
  }

  if (status === "ok") {
    return (
      <p className="mt-6 text-sm font-medium text-emerald-400">Merci !</p>
    );
  }

  return (
    <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse e-mail
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="votre@email.com"
        className="h-11 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none ring-accent focus:ring-2"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-lg bg-accent px-5 text-sm font-medium text-white transition hover:opacity-90"
      >
        S&apos;abonner
      </button>
    </form>
  );
}
