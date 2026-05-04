import HeroSection from "@/app/components/landing/hero-section";
import DasarHukumSection from "@/app/components/landing/dasar-hukum-section";
import KuesionerSection from "@/app/components/landing/kuesioner-section";
import DukunganSection from "@/app/components/landing/dukungan-section";
import ManfaatSection from "@/app/components/landing/manfaat-section";
import PelaksanaanSection from "@/app/components/landing/pelaksanaan-section";
import SiteFooter from "@/app/components/landing/site-footer";
import TujuanSection from "@/app/components/landing/tujuan-section";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--background)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(227,127,42,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(132,70,16,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute left-0 top-24 -z-10 h-56 w-56 rounded-full bg-[rgba(227,127,42,0.08)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 right-0 -z-10 h-72 w-72 rounded-full bg-[rgba(132,70,16,0.08)] blur-3xl" />
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-0 sm:px-6 lg:px-8">
        <HeroSection />
        <TujuanSection />
        <DasarHukumSection />
        <KuesionerSection />
        <PelaksanaanSection />
        <DukunganSection />
        <ManfaatSection />
      </main>

      <SiteFooter />
    </div>
  );
}
