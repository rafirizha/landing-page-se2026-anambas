"use client";

import Image from "next/image";
import { useRef } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type HeroNavProps = {
  faqItems: FAQItem[];
};

export default function HeroNav({ faqItems }: HeroNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openFaq = () => dialogRef.current?.showModal();
  const closeFaq = () => dialogRef.current?.close();

  return (
    <>
      <div className="flex w-full items-center gap-5">
        <Image
          src="/logo-bps-anambas.png"
          alt="Logo BPS Anambas"
          width={302}
          height={67}
          className="h-auto w-32 shrink-0 sm:w-44 lg:w-56"
          priority
          unoptimized
        />

        <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex">
          <button
            type="button"
            onClick={openFaq}
            className="btn btn-sm rounded-full border-none bg-[var(--brand)] px-6 text-sm font-medium text-white shadow-none hover:bg-[#cf6f1f] hover:text-white"
          >
            FAQ Sensus
          </button>
          <a
            href="https://sensus.bps.go.id"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm rounded-full border-none bg-[var(--brand)] px-6 text-sm font-medium text-white shadow-none hover:bg-[#cf6f1f] hover:text-white"
          >
            Lihat Data Sensus
          </a>
        </div>

        <div className="ml-auto dropdown dropdown-end md:hidden">
          <label
            tabIndex={0}
            className="btn btn-circle border-none bg-[var(--brand)] text-white shadow-none hover:bg-[#cf6f1f] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-30 mt-3 w-56 rounded-box bg-white p-2 shadow-none"
          >
            <li>
              <button
                type="button"
                onClick={openFaq}
                className="rounded-xl text-sm font-medium text-[var(--brand-deep)] hover:bg-[rgba(227,127,42,0.12)] hover:text-[var(--brand)]"
              >
                FAQ Sensus
              </button>
            </li>
            <li>
              <a
                href="https://sensus.bps.go.id"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl text-sm font-medium text-[var(--brand-deep)] hover:bg-[rgba(227,127,42,0.12)] hover:text-[var(--brand)]"
              >
                Lihat Data Sensus
              </a>
            </li>
          </ul>
        </div>
      </div>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-5xl rounded-[1.75rem] p-0">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              FAQ Sensus Ekonomi 2026
            </h3>
            <button
              type="button"
              onClick={closeFaq}
              className="btn btn-ghost btn-circle text-[var(--muted)]"
              aria-label="Tutup FAQ"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-7 w-7"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className="collapse collapse-arrow rounded-[1.4rem] border border-[var(--border)] bg-white"
                >
                  <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                  <div className="collapse-title text-xl font-medium text-[var(--foreground)]">
                    {item.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] px-6 py-5">
            <button
              type="button"
              onClick={closeFaq}
              className="btn w-full rounded-2xl border-none bg-[var(--brand)] text-white hover:bg-[#cf6f1f]"
            >
              Tutup
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Tutup</button>
        </form>
      </dialog>
    </>
  );
}
