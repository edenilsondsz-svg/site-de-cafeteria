"use client";

import type { ReactNode } from "react";
import { Button } from "../Button";
import { useReservation } from "./ReservationContext";

type ReservationTriggerProps = {
  variant?: "primario" | "secundario" | "texto";
  className?: string;
  children: ReactNode;
};

export function ReservationTrigger({
  variant = "primario",
  className,
  children,
}: ReservationTriggerProps) {
  const { abrir } = useReservation();

  return (
    <Button type="button" variant={variant} className={className} onClick={abrir}>
      {children}
    </Button>
  );
}
