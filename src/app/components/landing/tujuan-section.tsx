import type { ReactNode } from "react";

type GoalCardProps = {
  accent: string;
  eyebrow: string;
  title: string;
  details: string[];
  icon: ReactNode;
};

type CoverageCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const goals = [
  {
    accent: "bg-[#fff0df] text-[var(--brand)]",
    eyebrow: "Tujuan 1",
    title: "Produktivitas Sektor Ekonomi",
    details: [
      "Peta perekonomian wilayah dari sisi level dan struktur ekonomi",
      "UMKM dan kontribusinya terhadap perekonomian nasional",
      "Penerapan ekonomi digital dan ekonomi lingkungan",
    ],
    icon: <ProductivityIcon />,
  },
  {
    accent: "bg-[#fff3e6] text-[var(--brand)]",
    eyebrow: "Tujuan 2",
    title: "Sensus Ekonomi Membantu Dunia Usaha",
    details: [
      "Informasi pasar yang lebih akurat",
      "Perencanaan bisnis yang lebih baik",
      "Identifikasi peluang investasi dan daya saing",
    ],
    icon: <BusinessIcon />,
  },
  {
    accent: "bg-[#fff7e8] text-[var(--brand)]",
    eyebrow: "Tujuan 3",
    title: "Mendukung Asta Cita",
    details: [
      "Asta Cita Ke-2: Mendorong kemandirian pangan, energi, serta ekonomi kreatif, hijau, dan biru.",
      "Asta Cita Ke-3: Membuka lapangan kerja berkualitas dan mendukung kewirausahaan.",
      "Asta Cita Ke-6: Membangun dari daerah untuk pemerataan ekonomi dan pengentasan kemiskinan.",
    ],
    icon: <AstaIcon />,
  },
] as const;

const coverageCards = [
  {
    title: "Rumah Tangga",
    description: "Pendataan keluarga yang memiliki aktivitas ekonomi.",
    icon: <HouseIcon />,
  },
  {
    title: "UMKM",
    description: "Usaha mikro, kecil, dan menengah yang menjadi tulang punggung ekonomi.",
    icon: <BusinessSmallIcon />,
  },
  {
    title: "Usaha Besar",
    description: "Pelaku usaha skala besar yang berkontribusi dalam struktur ekonomi.",
    icon: <BuildingIcon />,
  },
] as const;

function GoalCard({ accent, eyebrow, title, details, icon }: GoalCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2.1rem] border border-[rgba(227,127,42,0.12)] bg-white/82 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/94 sm:p-6">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ring-[rgba(227,127,42,0.12)] ${accent}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
            {eyebrow}
          </p>
          <h3 className="mt-1 text-base font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-lg">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-5 grid gap-2.5">
        {details.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 px-1 py-1 text-sm leading-7 text-[var(--foreground)]"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
            <span className="flex-1">{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function CoverageCard({ title, description, icon }: CoverageCardProps) {
  return (
    <article className="flex h-full items-center gap-4 rounded-[1.7rem] border border-[rgba(227,127,42,0.12)] bg-white p-5 shadow-[0_14px_36px_rgba(17,24,39,0.04)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-[var(--brand)] ring-1 ring-[rgba(227,127,42,0.1)]">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>
    </article>
  );
}

function ProductivityIcon() {
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
      <path d="M4 19V5m0 14h16" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6.2" y="12.6" width="2.8" height="6.4" rx="1" fill="currentColor" opacity="0.18" />
      <rect x="10.6" y="9.6" width="2.8" height="9.4" rx="1" fill="currentColor" opacity="0.25" />
      <rect x="15" y="6.8" width="2.8" height="12.2" rx="1" fill="currentColor" opacity="0.32" />
      <path d="M6.8 14.8 10.4 11.6l2.1 2.1 4.2-5.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.7 8.6h1.7V6.8" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M4 10.2 12 5l8 5.2v8.6a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.2 10.2h11.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10.2v7.8M12 10.2v7.8M16 10.2v7.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.2 7.8 12 5l4.8 2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 15.8h4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.2 13.2 14.8 15.8 17 12.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AstaIcon() {
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
      <path d="M4.8 9.2 12 5l7.2 4.2v9.6H4.8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.2 10.2h9.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.2 10.2v8.4M12 10.2v8.4M15.8 10.2v8.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.8 7.2h2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6 12.9 7.5 14.6 7.8l-1.3 1.2.3 1.7L12 10l-1.6.8.3-1.7-1.3-1.2 1.7-.3z" fill="currentColor" opacity="0.22" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M4.5 11.5 12 5l7.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10.5v8h10v-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18.5v-4a2 2 0 0 1 4 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BusinessSmallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M5 9h14v8.5A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 9V6.8A1.8 1.8 0 0 1 8.8 5h6.4A1.8 1.8 0 0 1 17 6.8V9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12.2h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 19V7.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8.8h2.2M9 11.6h2.2M9 14.4h2.2M13.8 8.8H16M13.8 11.6H16M13.8 14.4H16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TujuanSection() {
  return (
    <section
      id="tujuan"
      className="relative left-1/2 -mt-1 flex w-[100vw] -translate-x-1/2 overflow-hidden bg-[#fdf3ea] py-14 lg:-mt-2 lg:min-h-[560px] lg:items-start lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_14px_30px_rgba(227,127,42,0.2)] sm:text-base">
            Tujuan
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-3">
          {goals.map((goal) => (
            <GoalCard
              key={goal.title}
              accent={goal.accent}
              eyebrow={goal.eyebrow}
              title={goal.title}
              details={goal.details}
              icon={goal.icon}
            />
          ))}
        </div>

        <div className="relative z-10 mt-8 rounded-[2.4rem] border border-[rgba(227,127,42,0.12)] bg-white/82 p-5 text-center shadow-[0_18px_50px_rgba(17,24,39,0.04)] backdrop-blur-sm sm:p-6">
          <div className="flex items-center justify-center gap-4">
            <div className="mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                Cakupan
              </p>
              <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Cakupan SE2026 dibagi menjadi rumah tangga dan usaha. Untuk
                usaha, fokusnya mencakup UMKM serta usaha besar, sementara
                kategori{" "}
                <span className="rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)]">
                  P
                </span>{" "}
                dan{" "}
                <span className="rounded-full bg-[#fff0df] px-2 py-0.5 font-semibold text-[var(--brand)]">
                  U
                </span>{" "}
                tidak termasuk.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {coverageCards.map((item) => (
              <CoverageCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
