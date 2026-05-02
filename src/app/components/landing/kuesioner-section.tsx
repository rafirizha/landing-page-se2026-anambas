import type { ReactNode } from "react";

import { businessPoints, householdPoints } from "./landing-data";

function HouseholdIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden
    >
      <path
        d="M4.5 11.5 12 5l7.5 6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.5v8h10v-8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 18.5v-4a2 2 0 0 1 4 0v4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="8.7" r="1.1" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden
    >
      <path
        d="M5 8.5h14v8.8A1.2 1.2 0 0 1 17.8 18H6.2A1.2 1.2 0 0 1 5 17.3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.2 8.5V6.9A1.2 1.2 0 0 1 8.4 5.7h7.2a1.2 1.2 0 0 1 1.2 1.2v1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11.2h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11.2v7M14 11.2v7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 15.4h7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuestionCard({
  title,
  subtitle,
  icon,
  points,
  accent,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  points: string[];
  accent: string;
}) {
  return (
    <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.05)] sm:p-7">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ring-[rgba(227,127,42,0.12)] ${accent}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {points.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 px-1 py-1 text-sm leading-7 text-[var(--foreground)] sm:text-base"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function KuesionerSection() {
  return (
    <section
      id="kuesioner"
      className="relative left-1/2 w-[100vw] -translate-x-1/2 overflow-hidden bg-[#fdf3ea] pt-16 pb-16 lg:pt-24 lg:pb-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_10px_30px_rgba(227,127,42,0.18)] sm:text-base">
            Jenis Kuesioner
          </div>
          <div className="mx-auto mt-5 max-w-4xl rounded-[1.8rem] border border-[var(--border)] bg-[#fbfbfb] px-5 py-4 text-sm leading-8 text-[var(--muted)] shadow-[0_10px_30px_rgba(17,24,39,0.03)] sm:px-6 sm:py-5 sm:text-base">
            <span className="text-[var(--foreground)]">
              Kuesioner SE2026 dibagi menjadi{" "}
              <span className="font-semibold">
                rumah tangga untuk seluruh keluarga
              </span>{" "}
              dan{" "}
              <span className="font-semibold">
                usaha untuk pelaku usaha dari skala kecil hingga besar
              </span>
              , agar pendataan lebih tepat sasaran.
            </span>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid gap-5 md:grid-cols-2">
          <QuestionCard
            title="Kuesioner Rumah Tangga"
            subtitle="Pendekatan keluarga"
            icon={<HouseholdIcon />}
            accent="bg-[#fff0df] text-[var(--brand)]"
            points={householdPoints}
          />

          <QuestionCard
            title="Kuesioner Usaha"
            subtitle="Pendekatan pelaku usaha"
            icon={<BusinessIcon />}
            accent="bg-[#fff3e6] text-[var(--brand)]"
            points={businessPoints}
          />
        </div>
      </div>
    </section>
  );
}
