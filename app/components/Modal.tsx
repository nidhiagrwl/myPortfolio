"use client";

import { ReactNode } from "react";

export function SimpleModal({
  open,
  onClose,
  title,
  children
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-surface-light shadow-subtle dark:bg-surface-dark">
        <div className="flex items-center justify-between border-b border-border-light/70 px-5 py-3 dark:border-border-dark">
          <h3 id="modal-title" className="text-sm font-semibold">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-1 text-text-mutedLight hover:bg-slate-100 dark:text-text-mutedDark dark:hover:bg-slate-800"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <div className="max-h-[78vh] overflow-auto px-5 py-4">{children}</div>
      </div>
    </div>
  );
}


