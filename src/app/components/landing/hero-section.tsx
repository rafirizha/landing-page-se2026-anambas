import Image from "next/image";
import HeroNav from "./hero-nav";
import HeroShowcase from "./hero-showcase";
import { faqs } from "./landing-data";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-white pb-0 pt-0 lg:pb-2">
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden">
        <div className="bg-white backdrop-blur">
          <div className="w-full px-5 py-3 sm:px-6 lg:pl-24 lg:pr-12 xl:pl-28 xl:pr-14 2xl:pl-28 2xl:pr-16">
            <HeroNav faqItems={faqs} />
          </div>
        </div>

        <div className="grid min-h-[500px] items-stretch gap-0 lg:grid-cols-[1fr_1fr]">
          <div className="relative flex min-h-[500px] flex-col overflow-hidden bg-white/92 px-5 sm:px-6 lg:px-12 xl:px-14 backdrop-blur-[2px]">
            <div className="relative z-10 flex flex-1 items-start pt-2 pb-3 sm:pt-4 lg:pt-6 lg:pb-4">
              <div className="-translate-y-1 sm:-translate-y-2 lg:-translate-y-4 lg:ml-14 max-w-[38rem]">
                <Image
                  src="/logo-se2026.png"
                  alt="Logo Sensus Ekonomi 2026"
                  width={302}
                  height={121}
                  className="h-auto w-32 sm:w-40"
                  priority
                  unoptimized
                />

                <h1 className="mt-5 max-w-[36rem] font-semibold tracking-tight sm:text-5xl lg:leading-[0.98]">
                  <span className="block text-4xl text-[var(--brand)] lg:text-[3.2rem]">
                    Sensus Ekonomi 2026
                  </span>
                  <span className="mt-2 block text-2xl text-[var(--foreground)] sm:text-3xl lg:whitespace-nowrap lg:text-[2.5rem]">
                    Potret Ekonomi Anambas
                  </span>
                </h1>

                <p className="mt-6 max-w-[29rem] text-justify text-base leading-8 text-[var(--muted)] sm:text-lg">
                  Sensus Ekonomi 2026 adalah pendataan seluruh unit usaha yang
                  dilaksanakan setiap 10 tahun sekali untuk mendapatkan potret
                  utuh perekonomian sebagai landasan kebijakan. Di Kabupaten
                  Kepulauan Anambas, SE2026 membantu memetakan potensi usaha,
                  memperkuat data ekonomi daerah, dan mendukung keputusan yang
                  lebih tepat sasaran.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#tujuan"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(227,127,42,0.25)] transition hover:bg-[#cf6f1f]"
                  >
                    Lihat ringkasan
                  </a>
                  <a
                    href="#manfaat"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(132,70,16,0.12)] bg-white/78 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                  >
                    Manfaat SE2026
                  </a>
                </div>
              </div>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}
