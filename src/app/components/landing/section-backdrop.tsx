type SectionBackdropProps = {
  variant?: "warm" | "light";
};

function CornerWaves({
  side,
  stroke,
}: {
  side: "left" | "right";
  stroke: string;
}) {
  return (
    <svg
      viewBox="0 0 320 220"
      aria-hidden
      className={`absolute top-0 h-56 w-[22rem] opacity-70 ${
        side === "left" ? "left-0" : "right-0 scale-x-[-1]"
      }`}
    >
      {Array.from({ length: 10 }).map((_, index) => {
        const y = 20 + index * 11;
        return (
          <path
            key={index}
            d={`M-40 ${y} C 40 ${y - 34}, 130 ${y - 34}, 220 ${y} S 340 ${
              y + 34
            }, 420 ${y}`}
            fill="none"
            stroke={stroke}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function SectionBackdrop({
  variant = "warm",
}: SectionBackdropProps) {
  const isLight = variant === "light";
  const stroke = isLight
    ? "rgba(227,127,42,0.11)"
    : "rgba(255,255,255,0.24)";
  const blobA = isLight
    ? "bg-[rgba(227,127,42,0.08)]"
    : "bg-[rgba(255,255,255,0.08)]";
  const blobB = isLight
    ? "bg-[rgba(227,127,42,0.06)]"
    : "bg-[rgba(255,255,255,0.06)]";
  const dotColor = isLight
    ? "rgba(227,127,42,0.08)"
    : "rgba(255,255,255,0.14)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className={`absolute -left-16 top-[-5rem] h-64 w-64 rounded-full blur-3xl ${blobA}`} />
      <div className={`absolute -right-16 top-6 h-72 w-72 rounded-full blur-3xl ${blobB}`} />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 42%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 42%, transparent 100%)",
        }}
      />
      <CornerWaves side="left" stroke={stroke} />
      <CornerWaves side="right" stroke={stroke} />
    </div>
  );
}
