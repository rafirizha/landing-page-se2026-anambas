import { benefits } from "./landing-data";

export default function ManfaatSection() {
  return (
    <section
      id="manfaat"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white pt-20 pb-12 shadow-[inset_0_1px_0_rgba(227,127,42,0.06)] lg:pt-28 lg:pb-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[linear-gradient(135deg,#f29632,#e57f25)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-white shadow-[0_18px_40px_rgba(227,127,42,0.22)] sm:px-10 sm:py-3.5 sm:text-base">
            Manfaat
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--foreground)] sm:text-base">
            Poin-poin manfaat SE2026 disajikan lebih ringkas agar pesan utamanya
            lebih mudah dipahami dan langsung terasa dampaknya.
          </p>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[1.8rem] border border-[rgba(227,127,42,0.08)] bg-white p-6 shadow-[0_14px_36px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(227,127,42,0.12)] hover:border-[rgba(227,127,42,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-lg font-bold text-[var(--brand)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-6 rounded-[2.2rem] border border-[rgba(227,127,42,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,248,239,0.96))] p-6 text-center text-[var(--foreground)] shadow-[0_18px_42px_rgba(17,24,39,0.05)] sm:p-7 lg:p-8">
          <div className="mx-auto inline-flex rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_10px_24px_rgba(227,127,42,0.18)]">
            Penutup
          </div>
          <div className="mx-auto mt-4 flex max-w-3xl flex-col gap-4">
            <div className="rounded-[1.5rem] border border-[rgba(227,127,42,0.12)] bg-[#fffaf5] px-5 py-4 shadow-[0_12px_28px_rgba(17,24,39,0.03)] sm:px-6 sm:py-5">
              <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
                <span className="font-semibold text-[var(--foreground)]">
                  SE2026
                </span>{" "}
                menjadi langkah penting untuk menghadirkan data ekonomi yang
                lebih{" "}
                <span className="rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)]">
                  lengkap
                </span>
                ,{" "}
                <span className="rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)]">
                  akurat
                </span>
                , dan bermanfaat bagi pembangunan daerah.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[rgba(227,127,42,0.12)] bg-[#fffaf5] px-5 py-4 shadow-[0_12px_28px_rgba(17,24,39,0.03)] sm:px-6 sm:py-5">
              <div className="flex flex-col items-center gap-4 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(227,127,42,0.16)] bg-[#fff3e4] text-[var(--brand)] shadow-[0_8px_18px_rgba(227,127,42,0.08)]">
                  <span className="text-lg font-bold leading-none">!</span>
                </span>
                <p className="max-w-2xl">
                  <span className="font-semibold text-[var(--foreground)]">
                    Dukung kelancaran pendataan
                  </span>{" "}
                  dengan{" "}
                  <span className="rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)]">
                    menerima petugas SE2026
                  </span>{" "}
                  dan memberikan{" "}
                  <span className="rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)]">
                    informasi yang benar serta lengkap
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
