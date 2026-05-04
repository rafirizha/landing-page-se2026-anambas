"use client";

import { useState } from "react";

import { supportLetters, supportVideos } from "./landing-data";

type SupportMode = "video" | "surat";

type SupportItem = {
  title: string;
  description: string;
  href?: string;
};

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7 translate-x-[1px]"
      aria-hidden
    >
      <path d="m9 7 8 5-8 5V7Z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke="currentColor"
      className="h-7 w-7"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.75h6.5L18.25 8.5V20.25a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20.25V5.25A1.5 1.5 0 0 1 7 3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3.75V8.5H18.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12.25h7.5M8.25 15.25h7.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function SupportCard({
  item,
  kind,
}: {
  item: SupportItem;
  kind: SupportMode;
}) {
  const content = (
    <>
      <div
        className={`relative overflow-hidden rounded-[1.5rem] p-5 text-white ${
          kind === "video"
            ? "bg-[linear-gradient(135deg,#111827_0%,#1f2937_55%,#e37f2a_100%)]"
            : "bg-[linear-gradient(135deg,#e37f2a_0%,#f59e0b_100%)]"
        }`}
      >
        <div
          className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-10 right-0 h-44 w-44 rounded-full bg-black/10 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em]">
            {kind === "video" ? "YouTube" : "PDF"}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
            {kind === "video" ? "Klik thumbnail" : "Buka dokumen"}
          </span>
        </div>

        <div className="relative z-10 mt-8 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            {kind === "video" ? <PlayIcon /> : <DocumentIcon />}
          </div>
        </div>

        <div className="relative z-10 mt-8">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/86 sm:text-base">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[rgba(227,127,42,0.1)] px-5 py-4 text-sm">
        <span className="text-[var(--muted)]">
          {item.href ? "Tersedia untuk dibuka" : "Tautan belum diisi"}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-[var(--brand)]">
          {kind === "video" ? "Buka video" : "Buka PDF"} <ArrowIcon />
        </span>
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-white shadow-[0_18px_50px_rgba(17,24,39,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(17,24,39,0.08)]"
      >
        {content}
      </a>
    );
  }

  return <article className="overflow-hidden rounded-[2rem] border border-[rgba(227,127,42,0.12)] bg-white shadow-[0_18px_50px_rgba(17,24,39,0.05)]">{content}</article>;
}

export default function DukunganSection() {
  const [activeTab, setActiveTab] = useState<SupportMode>("video");
  const activeItems = activeTab === "video" ? supportVideos : supportLetters;

  return (
    <section
      id="dukungan"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white py-16 shadow-[inset_0_1px_0_rgba(227,127,42,0.06)] lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.36em] text-white shadow-[0_14px_30px_rgba(227,127,42,0.2)] sm:text-base">
            Dukungan
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Video dukungan dan surat edaran
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Navigasi dipisah agar 3 video dan 3 surat edaran tetap rapi,
            mudah dipindahkan, dan enak dibuka dari HP maupun desktop.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-2xl gap-3 rounded-full bg-[#f8f4ef] p-2 shadow-[inset_0_1px_0_rgba(17,24,39,0.03)]">
          {(
            [
              { key: "video", label: "Video Dukungan", count: supportVideos.length },
              { key: "surat", label: "Surat Edaran", count: supportLetters.length },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition sm:text-base ${
                activeTab === tab.key
                  ? "bg-[var(--brand)] text-white shadow-[0_10px_24px_rgba(227,127,42,0.2)]"
                  : "text-[var(--foreground)] hover:bg-white/80"
              }`}
            >
              <span className="block">{tab.label}</span>
              <span className="block text-xs font-medium opacity-75">
                {tab.count} item
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeItems.map((item) => (
            <SupportCard
              key={item.title}
              item={item}
              kind={activeTab}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
