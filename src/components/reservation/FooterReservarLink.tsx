"use client";

import { useReservation } from "./ReservationContext";

/**
 * Link de "Reservar mesa" no rodapé, estilizado igual aos demais itens da
 * lista de navegação (não usa o Button compartilhado para evitar conflito
 * de especificidade entre as cores claras do rodapé escuro e as cores do
 * botão, pensadas para fundo claro).
 */
export function FooterReservarLink() {
  const { abrir } = useReservation();
  return (
    <button type="button" onClick={abrir} className="text-left hover:text-areia">
      Reservar mesa
    </button>
  );
}
