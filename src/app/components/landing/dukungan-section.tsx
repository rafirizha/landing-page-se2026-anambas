import { supportVideoUrl } from "./landing-data";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7 translate-x-[1px]"
      aria-hidden
    >
      <path d="m9 7 8 5-8 5V7Z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke="currentColor"
      className="h-7 w-7"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.75h6.5L18.25 8.5V20.25a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20.25V5.25A1.5 1.5 0 0 1 7 3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3.75V8.5H18.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12.25h7.5M8.25 15.25h7.5" />
    </svg>
  );
}

export default function DukunganSection() {
  return (
    <section
      id="dukungan"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white py-16 shadow-[inset_0_1px_0_rgba(227,127,42,0.06)] lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_14px_30px_rgba(227,127,42,0.2)] sm:text-base">
            Dukungan
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Video dukungan dan surat penguat sosialisasi
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Dua bentuk dukungan ini dipilih agar pesan sosialisasi lebih mudah
            dibagikan, lebih kredibel, dan tetap hemat hosting.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <a
            href={supportVideoUrl}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,239,0.92))] p-4 shadow-[0_18px_50px_rgba(17,24,39,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(17,24,39,0.08)] sm:p-5"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,#111827_0%,#1f2937_55%,#e37f2a_100%)] p-6 text-white">
              <div
                className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-black/10 blur-3xl"
                aria-hidden
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
                  YouTube
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  Klik thumbnail
                </span>
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition group-hover:scale-105">
                  <PlayIcon />
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Video Dukungan
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-white/86 sm:text-base">
                  Thumbnail ini membuka video dukungan di YouTube agar
                  sosialisasi tetap ringan untuk web hosting, tapi tetap mudah
                  dibagikan ke publik.
                </p>
              </div>
            </div>
          </a>

          <article className="rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)] sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-[var(--brand)] ring-1 ring-[rgba(227,127,42,0.12)]">
                <DocumentIcon />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                  Surat Dukungan
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                  Penguat resmi untuk sosialisasi
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
              Surat dukungan diposisikan sebagai ruang untuk dokumen resmi yang
              memperkuat pesan sosialisasi dan bisa ditautkan ketika file PDF
              final sudah siap.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#fff8f0] p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Fungsinya
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Menjadi penguat legitimasi dan memudahkan publik memahami
                  bahwa sosialisasi ini resmi.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#fff8f0] p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Status file
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Siap ditautkan ke PDF surat dukungan resmi begitu file
                  disiapkan.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
