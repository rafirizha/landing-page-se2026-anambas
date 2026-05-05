import type { ReactNode } from "react";
import CoverageTerm from "./coverage-term";

type GoalCardProps = {
  accent: string;
  eyebrow: string;
  title: string;
  details: readonly string[];
  icon: ReactNode;
  variant?: "default" | "asta";
};

type CoverageCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const goals = [
  {
    accent:
      "bg-gradient-to-br from-[#ffb25c] via-[#ff9c2f] to-[#ea7a1f] text-white shadow-[0_14px_28px_rgba(234,122,31,0.22)]",
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
    accent:
      "bg-gradient-to-br from-[#ff9b67] via-[#f97c2f] to-[#d45d1c] text-white shadow-[0_14px_28px_rgba(244,121,47,0.2)]",
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
    accent:
      "bg-gradient-to-br from-[#ffd56a] via-[#f6a623] to-[#c96a14] text-white shadow-[0_14px_28px_rgba(246,166,35,0.2)]",
    eyebrow: "Tujuan 3",
    title: "Mendukung Asta Cita",
    details: [
      "Kemandirian pangan, energi, serta ekonomi kreatif, hijau, dan biru.",
      "Lapangan kerja berkualitas dan kewirausahaan.",
      "Pemerataan ekonomi serta pengentasan kemiskinan.",
    ],
    icon: <AstaIcon />,
    variant: "asta",
  },
] as const;

const coverageCards = [
  {
    title: "Rumah Tangga",
    description: "Pendataan seluruh keluarga",
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

function GoalCard({ accent, eyebrow, title, details, icon, variant = "default" }: GoalCardProps) {
  const pointShellClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff3e6] text-[var(--brand)] ring-1 ring-[rgba(227,127,42,0.12)]";

  return (
    <article className="group flex h-full flex-col rounded-[2.1rem] border border-[rgba(227,127,42,0.12)] bg-white/82 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/94 hover:shadow-[0_20px_60px_rgba(227,127,42,0.15)] hover:border-[rgba(227,127,42,0.3)] sm:p-6">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ring-white/35 transition-transform duration-300 group-hover:scale-110 ${accent}`}
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

      {variant === "asta" ? (
        <div className="mt-5 grid gap-3">
          {details.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[1.35rem] border border-[rgba(227,127,42,0.08)] bg-white px-4 py-3 text-sm leading-6 text-[var(--foreground)] shadow-[0_8px_22px_rgba(17,24,39,0.03)]"
            >
              <div className={pointShellClass}>
                {index === 0 ? <AstaLeafIcon /> : index === 1 ? <BriefcaseIcon /> : <LocationIcon />}
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[var(--foreground)]">
                  {index === 0
                    ? "Asta Cita Ke-2"
                    : index === 1
                      ? "Asta Cita Ke-3"
                      : "Asta Cita Ke-6"}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 grid gap-3">
          {details.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[1.35rem] border border-[rgba(227,127,42,0.08)] bg-white px-4 py-3 text-sm leading-6 text-[var(--foreground)] shadow-[0_8px_22px_rgba(17,24,39,0.03)]"
            >
              <div className={pointShellClass}>
                {title === "Produktivitas Sektor Ekonomi" ? (
                  item === details[0] ? (
                    <ChartIcon />
                  ) : item === details[1] ? (
                    <CommunityIcon />
                  ) : (
                    <LeafIcon />
                  )
                ) : item === details[0] ? (
                  <SearchIcon />
                ) : item === details[1] ? (
                  <TargetIcon />
                ) : (
                  <GrowthIcon />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {title === "Produktivitas Sektor Ekonomi"
                    ? item === details[0]
                      ? "Peta Perekonomian"
                      : item === details[1]
                        ? "Kontribusi UMKM"
                        : "Ekonomi Digital & Lingkungan"
                    : item === details[0]
                      ? "Informasi Pasar"
                      : item === details[1]
                        ? "Perencanaan Bisnis"
                        : "Investasi & Daya Saing"}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function CoverageCard({ title, description, icon }: CoverageCardProps) {
  return (
    <article className="group flex h-full items-center gap-4 rounded-[1.7rem] border border-[rgba(227,127,42,0.12)] bg-white p-5 shadow-[0_14px_36px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(227,127,42,0.12)] hover:border-[rgba(227,127,42,0.2)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-[var(--brand)] ring-1 ring-[rgba(227,127,42,0.1)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white">
        {icon}
      </div>
      <div className="flex-1 text-center sm:text-left">
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

function AstaLeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 18c8.5 0 14-5 14-13-8 0-13 5-13 13v0Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15c1.5-1.5 4-4 8-6" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.5V5.25A1.25 1.25 0 0 1 10.25 4h3.5A1.25 1.25 0 0 1 15 5.25V6.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 8.5h15A1.5 1.5 0 0 1 21 10v8.25A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25V10a1.5 1.5 0 0 1 1.5-1.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12.5h18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-4.35 6-10A6 6 0 0 0 6 11c0 5.65 6 10 6 10Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a1.5 1.5 0 1 0 0-.01" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M4 19V5m0 14h16" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="12.5" width="2.5" height="4.5" rx="1" fill="currentColor" opacity="0.25" />
      <rect x="11" y="9.5" width="2.5" height="7.5" rx="1" fill="currentColor" opacity="0.35" />
      <rect x="15" y="6.5" width="2.5" height="10.5" rx="1" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="8" cy="9" r="2.3" fill="currentColor" opacity="0.2" />
      <circle cx="16" cy="9" r="2.3" fill="currentColor" opacity="0.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19c.6-2.8 2.6-4.2 3.5-4.2s2.9 1.4 3.5 4.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 19c.5-2.4 2.2-3.7 3.5-3.7s3 1.3 3.5 3.7" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 18c8.5 0 14-5 14-13-8 0-13 5-13 13v0Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15c1.5-1.5 4-4 8-6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="11" cy="11" r="5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.2 15.2 3.8 3.8" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" opacity="0.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v3M19.5 12h-3M12 16.5v3M4.5 12h3" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M4 19V5m0 14h16" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.5 14.5 4-4 3 3 4.8-5.8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7.5h1.8V9.3" />
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
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
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
              variant={goal.title === "Mendukung Asta Cita" ? "asta" : "default"}
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
                <CoverageTerm
                  term="P"
                  description="Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial Wajib."
                />{" "}
                dan{" "}
                <CoverageTerm
                  term="U"
                  description="Aktivitas Rumah Tangga sebagai Pemberi Kerja; Aktivitas yang Menghasilkan Barang Jasa oleh Rumah Tangga untuk Keperluan Sendiri yang Tidak Terdiferensiasi."
                />{" "}
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
