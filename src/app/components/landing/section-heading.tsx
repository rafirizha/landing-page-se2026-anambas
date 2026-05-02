type SectionHeadingProps = {
  title: string;
  description: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
