"use client";

import { forwardRef } from "react";
import { ReservationForm } from "../ReservationForm";

type ReservationDialogProps = {
  onFechar: () => void;
};

export const ReservationDialog = forwardRef<HTMLDialogElement, ReservationDialogProps>(
  function ReservationDialog({ onFechar }, ref) {
    return (
      <dialog
        ref={ref}
        onClick={(evento) => {
          if (evento.target === evento.currentTarget) onFechar();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-md border-0 bg-transparent p-0 backdrop:bg-espresso/60"
      >
        <div className="relative">
          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-espresso/60 transition-colors duration-150 hover:bg-espresso/[0.06] hover:text-espresso"
          >
            ✕
          </button>
          <ReservationForm />
        </div>
      </dialog>
    );
  },
);
