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
    <article className="group relative overflow-hidden rounded-[2rem] border border-[rgba(17,24,39,0.08)] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(17,24,39,0.14)] hover:shadow-[0_22px_60px_rgba(17,24,39,0.07)] sm:p-7">

      <div className="flex items-start gap-4">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] ring-1 ring-[rgba(255,255,255,0.55)] shadow-[0_10px_18px_rgba(17,24,39,0.06)] ${accent}`}
          >
            {icon}
          </div>

          <div className="min-w-0">
            <div className="inline-flex rounded-full bg-[#fff5eb] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              {subtitle}
            </div>
            <h3 className="mt-3 max-w-[11.5rem] text-[1.05rem] font-bold leading-tight tracking-tight text-[var(--foreground)] sm:max-w-none sm:text-[1.2rem]">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <ul className="mt-6 grid gap-3">
        {points.map((item, index) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-[rgba(227,127,42,0.08)] bg-[#fffaf5] px-4 py-3 text-sm leading-7 text-[var(--foreground)] shadow-[0_8px_22px_rgba(17,24,39,0.025)] sm:text-base"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0df] text-[0.7rem] font-semibold text-[var(--brand)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5">{item}</span>
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
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_10px_30px_rgba(227,127,42,0.18)] sm:text-base">
            Jenis Kuesioner
          </div>
          <div className="mx-auto mt-5 max-w-4xl rounded-[1.8rem] border border-[var(--border)] bg-[#fbfbfb] px-5 py-4 text-sm leading-8 text-[var(--muted)] shadow-[0_10px_30px_rgba(17,24,39,0.03)] sm:px-6 sm:py-5 sm:text-base">
            <span>
              Kuesioner SE2026 dibagi menjadi{" "}
              <span className="font-semibold text-[var(--brand)]">
                rumah tangga untuk seluruh keluarga
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-[var(--brand)]">
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
            accent="bg-gradient-to-br from-[#ffb25c] via-[#ff9c2f] to-[#ea7a1f] text-white shadow-[0_14px_28px_rgba(234,122,31,0.22)]"
            points={householdPoints}
          />

          <QuestionCard
            title="Kuesioner Usaha"
            subtitle="Pendekatan pelaku usaha"
            icon={<BusinessIcon />}
            accent="bg-gradient-to-br from-[#ffd56a] via-[#f6a623] to-[#c96a14] text-white shadow-[0_14px_28px_rgba(246,166,35,0.2)]"
            points={businessPoints}
          />
        </div>
      </div>
    </section>
  );
}
