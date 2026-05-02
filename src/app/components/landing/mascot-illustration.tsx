import Image from "next/image";

export default function MascotIllustration() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/90 p-5 shadow-[0_24px_80px_rgba(227,127,42,0.14)] backdrop-blur">
      <div className="absolute right-5 top-5 rounded-full bg-[var(--brand)] px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
        Bung Itung
      </div>

      <div
        className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[rgba(227,127,42,0.14)] blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-8 right-0 h-32 w-32 rounded-full bg-[rgba(132,70,16,0.12)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[320px] justify-center">
        <Image
          src="/bung-itung-s1.png"
          alt="Ilustrasi Bung Itung petugas BPS"
          width={372}
          height={561}
          className="h-auto w-full max-w-[260px] sm:max-w-[300px]"
          unoptimized
        />
      </div>

      <div className="mt-1 flex flex-wrap justify-center gap-2 text-xs font-medium text-[var(--muted)]">
        <span className="rounded-full bg-[#fff4e8] px-3 py-1">Rompi resmi</span>
        <span className="rounded-full bg-[#fff4e8] px-3 py-1">ID card</span>
        <span className="rounded-full bg-[#fff4e8] px-3 py-1">Clipboard</span>
      </div>
    </div>
  );
}
