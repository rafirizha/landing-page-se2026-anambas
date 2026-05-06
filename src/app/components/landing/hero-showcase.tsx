import Image from "next/image";

export default function HeroShowcase() {
  return (
    <div className="relative hidden min-h-[500px] flex-col overflow-hidden bg-white lg:flex">
      <div className="absolute inset-0">
        <Image
          src="/kota-tarempa-anambaskab.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="50vw"
          aria-hidden
          unoptimized
        />
      </div>
    </div>
  );
}
