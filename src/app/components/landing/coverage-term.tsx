"use client";

import { useState } from "react";

type CoverageTermProps = {
  term: string;
  description: string;
};

export default function CoverageTerm({ term, description }: CoverageTermProps) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex align-middle">
      <button
        type="button"
        title={description}
        aria-expanded={open}
        aria-describedby={`${term}-tooltip`}
        onClick={() => setOpen((current) => !current)}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex min-w-8 items-center justify-center rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)] ring-1 ring-[rgba(227,127,42,0.12)] transition hover:bg-[#ffe6c8] focus:outline-none focus:ring-2 focus:ring-[rgba(227,127,42,0.28)]"
      >
        {term}
      </button>
      <span
        id={`${term}-tooltip`}
        role="tooltip"
        className={`absolute left-1/2 top-full z-20 mt-2 w-[min(18rem,78vw)] -translate-x-1/2 rounded-2xl bg-[var(--foreground)] px-3 py-2 text-left text-xs leading-5 text-white shadow-[0_14px_36px_rgba(17,24,39,0.22)] transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {description}
      </span>
    </span>
  );
}
