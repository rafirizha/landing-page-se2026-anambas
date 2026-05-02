import Image from "next/image";
import { schedule } from "./landing-data";

function TimelineIcon({ index }: { index: number }) {
  const common = "h-5 w-5";

  if (index === 0) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.9"
        stroke="currentColor"
        className={common}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 4.5v3m12-3v3" />
        <rect x="4.5" y="6.5" width="15" height="13" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h8M8 14.5h5" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.9"
        stroke="currentColor"
        className={common}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6-4.35 6-10.25A6 6 0 0 0 6 10.75C6 16.65 12 21 12 21Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a1.5 1.5 0 1 0 0-.01" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.9"
      stroke="currentColor"
      className={common}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.5L18 9.2l-4.2 1.7L12 15l-1.8-4.1L6 9.2l4.2-1.7L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 14.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z" />
    </svg>
  );
}

export default function PelaksanaanSection() {
  return (
    <section id="pelaksanaan" className="pb-16 pt-4 lg:pb-24 lg:pt-8">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_14px_30px_rgba(227,127,42,0.2)] sm:text-base">
            Pelaksanaan
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Jadwal pelaksanaan SE2026 ditampilkan ringkas bersama visual petugas
            resmi, supaya alurnya mudah diikuti dan terpercaya
          </p>
        </div>

        <div className="relative z-10 mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="h-full rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,239,0.92))] p-6 shadow-[0_18px_50px_rgba(17,24,39,0.04)] sm:p-8">
            <p className="text-center text-base font-semibold uppercase tracking-[0.28em] text-[var(--brand)] sm:text-lg">
              Timeline pelaksanaan
            </p>

            <div className="mt-7 space-y-5">
              {schedule.map((item, index) => (
                <div key={item.phase} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-white text-[var(--brand)] shadow-[0_10px_28px_rgba(227,127,42,0.12)] ring-1 ring-[rgba(227,127,42,0.12)]">
                      <TimelineIcon index={index} />
                    </div>
                    {index < schedule.length - 1 ? (
                      <div className="mt-3 h-full w-px bg-[linear-gradient(180deg,rgba(227,127,42,0.38),rgba(227,127,42,0.08))]" />
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1 rounded-[1.5rem] border border-[rgba(227,127,42,0.12)] bg-white/92 p-5 sm:p-6">
                    <span className="inline-flex rounded-full bg-[#fff4e8] px-3 py-1 text-xs font-semibold text-[var(--brand-deep)]">
                      {item.phase}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-[var(--foreground)] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col rounded-[2rem] border border-[rgba(227,127,42,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,239,0.96))] p-6 shadow-[0_18px_50px_rgba(17,24,39,0.04)] sm:p-8">
            <p className="text-center text-base font-semibold uppercase tracking-[0.28em] text-[var(--brand)] sm:text-lg">
              Petugas resmi
            </p>

            <div className="mt-4 flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-white">
              <div className="relative flex justify-center bg-[linear-gradient(180deg,rgba(255,247,239,0.95),rgba(255,255,255,0.95))] p-4 sm:p-5">
                <div
                  className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[rgba(227,127,42,0.14)] blur-3xl"
                  aria-hidden
                />
                <div
                  className="absolute right-6 bottom-4 h-24 w-24 rounded-full bg-[rgba(132,70,16,0.1)] blur-3xl"
                  aria-hidden
                />
                <Image
                  src="/bung-itung-s1.png"
                  alt="Ilustrasi Bung Itung petugas BPS"
                  width={372}
                  height={561}
                  className="relative z-10 h-auto w-full max-w-[152px] sm:max-w-[168px]"
                  unoptimized
                />
              </div>

              <div className="flex flex-1 flex-col border-t border-[rgba(227,127,42,0.08)] px-5 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
                <div className="text-center">
                  <p className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                    Bung Itung
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    Petugas resmi BPS untuk pendataan lapangan
                  </p>
                </div>

                <div className="mt-5 space-y-3 sm:mt-6">
                  {[
                    "Menggunakan Rompi Sensus Ekonomi",
                    "Menggunakan ID Card Resmi",
                    "Perlengkapan pendataan yang standar serta profesional",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/92 px-3 py-2 text-sm font-medium text-[var(--foreground)]"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff4e8] text-[var(--brand)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
