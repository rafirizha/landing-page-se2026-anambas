import { benefits } from "./landing-data";

export default function ManfaatSection() {
  return (
    <section
      id="manfaat"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#fdf3ea] py-12 shadow-[inset_0_1px_0_rgba(227,127,42,0.06)] lg:py-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-14 bg-[linear-gradient(180deg,rgba(243,152,52,0.05),rgba(253,243,234,0))]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[linear-gradient(135deg,#f29632,#e57f25)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-white shadow-[0_18px_40px_rgba(227,127,42,0.22)] sm:px-10 sm:py-3.5 sm:text-base">
            Manfaat
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--foreground)] sm:text-base">
            Poin-poin manfaat SE2026 disajikan lebih ringkas agar pesan utamanya
            lebih mudah dipahami dan langsung terasa dampaknya.
          </p>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-[rgba(227,127,42,0.08)] bg-white p-6 shadow-[0_14px_36px_rgba(17,24,39,0.04)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-lg font-bold text-[var(--brand)]">
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
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            <span className="font-semibold text-[var(--foreground)]">
              SE2026
            </span>{" "}
            menjadi langkah penting untuk menghadirkan data ekonomi yang lebih
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
      </div>
    </section>
  );
}
