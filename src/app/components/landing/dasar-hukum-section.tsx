import Image from "next/image";

type StatCardProps = {
  logoSrc: string;
  logoAlt: string;
  description: string;
  footer: string;
  className: string;
};

const statCards = [
  {
    logoSrc: "/logo-sensus-penduduk.png",
    logoAlt: "Logo Sensus Penduduk 2020",
    description:
      "Sensus penduduk menyediakan data karakteristik pokok dan rinci terhadap seluruh penduduk di Indonesia.",
    footer: "SP dilaksanakan pada tahun berakhiran '0'",
    className: "bg-[#19a4e5]",
  },
  {
    logoSrc: "/logo-sensus-pertanian.png",
    logoAlt: "Logo Sensus Pertanian 2023",
    description:
      "Sensus Pertanian memotret perubahan yang terjadi di sektor pertanian di Indonesia.",
    footer: "ST dilaksanakan pada tahun berakhiran '3'",
    className: "bg-[#95c63d]",
  },
  {
    logoSrc: "/logo-se2026.png",
    logoAlt: "Logo Sensus Ekonomi 2026",
    description:
      "Sensus ekonomi merupakan kegiatan sepuluh tahun sekali untuk mendata para pelaku usaha di seluruh Indonesia.",
    footer: "SE dilaksanakan pada tahun berakhiran '6'",
    className: "bg-[#e36f15]",
  },
] as const;

function StatCard({ logoSrc, logoAlt, description, footer, className }: StatCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-[var(--border)] bg-white p-5 text-center shadow-[0_18px_50px_rgba(17,24,39,0.05)] sm:p-6">
      <div className="flex min-h-24 items-center justify-center pb-4">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={280}
          height={120}
          className="h-auto w-full max-w-[11.5rem] object-contain"
          unoptimized
        />
      </div>

      <div
        className={`flex flex-1 flex-col rounded-[1.6rem] px-5 py-6 text-white backdrop-blur-sm ${className}`}
      >
        <h3 className="sr-only">{logoAlt}</h3>
        <p className="text-sm font-semibold leading-7 sm:text-base">
          {description}
        </p>
        <p className="mt-auto pt-6 text-sm font-semibold leading-7 text-white/95">
          {footer}
        </p>
      </div>
    </article>
  );
}

export default function DasarHukumSection() {
  return (
    <section
      id="dasar-hukum"
      className="relative left-1/2 w-[100vw] -translate-x-1/2 overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_10px_30px_rgba(227,127,42,0.18)] sm:text-base">
            Dasar Hukum
          </div>
          <h2 className="mt-3 pb-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Statistik diselenggarakan lewat beberapa cara resmi
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[#fbfbfb] p-5 text-center shadow-[0_18px_50px_rgba(17,24,39,0.04)] sm:p-6 lg:-mt-1">
          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            <span className="font-semibold text-[var(--brand)]">
              UU No. 16 Tahun 1997 tentang Statistik
            </span>{" "}
            Undang-undang statistik menegaskan bahwa pengumpulan data dapat
            dilakukan melalui sensus, survei, kompilasi produk administrasi,
            dan cara lain sesuai perkembangan IPTEK.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {statCards.map((item) => (
            <StatCard
              key={item.logoAlt}
              logoSrc={item.logoSrc}
              logoAlt={item.logoAlt}
              description={item.description}
              footer={item.footer}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
