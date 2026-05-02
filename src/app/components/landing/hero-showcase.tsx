import Image from "next/image";

export default function HeroShowcase() {
  return (
    <div className="relative hidden min-h-[500px] flex-col overflow-hidden bg-white px-6 sm:px-10 lg:flex lg:px-[max(4rem,calc((100vw-72rem)/2+4rem))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(0,0,0,0.02),transparent_24%),radial-gradient(circle_at_74%_68%,rgba(0,0,0,0.015),transparent_18%)]" />

      <div className="absolute inset-0">
        <Image
          src="/kota-tarempa-anambaskab.png"
          alt=""
          fill
          className="object-cover object-center opacity-[1]"
          sizes="50vw"
          aria-hidden
          unoptimized
        />
      </div>

      <div className="absolute inset-0 bg-white/72" aria-hidden />
    </div>
  );
}
