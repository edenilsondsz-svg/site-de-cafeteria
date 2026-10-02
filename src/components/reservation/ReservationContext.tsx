"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import { ReservationDialog } from "./ReservationDialog";

type ReservationContextValue = {
  abrir: () => void;
  fechar: () => void;
};

const ReservationContext = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const abrir = () => dialogRef.current?.showModal();
  const fechar = () => dialogRef.current?.close();

  return (
    <ReservationContext.Provider value={{ abrir, fechar }}>
      {children}
      <ReservationDialog ref={dialogRef} onFechar={fechar} />
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const contexto = useContext(ReservationContext);
  if (!contexto) {
    throw new Error("useReservation precisa ser usado dentro de ReservationProvider");
  }
  return contexto;
}
