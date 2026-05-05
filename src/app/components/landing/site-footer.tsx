const socialLinks = [
  {
    label: "Website",
    value: "anambaskab.bps.go.id",
    href: "https://anambaskab.bps.go.id",
    icon: WebsiteIcon,
  },
  {
    label: "Instagram",
    value: "@bpsanambas",
    href: "https://www.instagram.com/bpsanambas/",
    icon: InstagramIcon,
  },
  {
    label: "Email",
    value: "pst2105@gmail.com",
    href: "mailto:pst2105@gmail.com",
    icon: MailIcon,
  },
  {
    label: "YouTube",
    value: "BPS KABUPATEN KEPULAUAN ANAMBAS",
    href: "https://www.youtube.com/results?search_query=BPS+KABUPATEN+KEPULAUAN+ANAMBAS",
    icon: YoutubeIcon,
  },
];

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M3.75 8.25h16.5M3.75 15.75h16.5M10 3.75a15.2 15.2 0 0 0 0 16.5M14 3.75a15.2 15.2 0 0 1 0 16.5M12 3.75c3.45 0 6.25 3.69 6.25 8.25S15.45 20.25 12 20.25 5.75 16.56 5.75 12 8.55 3.75 12 3.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <rect
        x="4.25"
        y="4.25"
        width="15.5"
        height="15.5"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.35" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <rect
        x="3.75"
        y="5.75"
        width="16.5"
        height="12.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5.5 7.5 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <rect
        x="3.75"
        y="6.25"
        width="16.5"
        height="11.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m10.2 9.2 4.6 2.8-4.6 2.8V9.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative -mt-px bg-[#fdf3ea]">
      <div className="relative mx-auto w-full max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.035)] md:flex-row md:items-start md:justify-between md:gap-10 sm:p-8">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
              Kontak Resmi
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              BPS Kabupaten Kepulauan Anambas
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
              Informasi resmi Sensus Ekonomi 2026 dapat diakses melalui kanal
              digital berikut untuk memudahkan publik terhubung dengan BPS.
            </p>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-2 lg:min-w-[36rem]">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex w-full items-start gap-4 rounded-[1.35rem] border border-[rgba(227,127,42,0.12)] bg-white px-4 py-3 text-left transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(17,24,39,0.05)] sm:items-center"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-[var(--brand)]">
                    <Icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium leading-5 text-[var(--foreground)]">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 px-2 pt-10 text-center text-xs text-[var(--muted)] sm:text-sm">
          <p>Made by Tim IT BPS Kabupaten Kepulauan Anambas</p>
        </div>
      </div>
    </footer>
  );
}
