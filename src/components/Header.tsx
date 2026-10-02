"use client";

import { useEffect, useState } from "react";
import { BeanIcon } from "./icons/BeanIcon";
import { ReservationTrigger } from "./reservation/ReservationTrigger";

const navegacao = [
  { rotulo: "Cardápio", href: "/cardapio" },
  { rotulo: "Sobre nós", href: "/sobre" },
  { rotulo: "Como funciona", href: "/#como-funciona" },
];

export function Header() {
  const [comFundo, setComFundo] = useState(false);

  useEffect(() => {
    const aoRolar = () => setComFundo(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        comFundo ? "bg-creme shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-2 whitespace-nowrap font-display text-heading-md text-espresso"
        >
          <BeanIcon className="h-4 w-6 shrink-0 text-caramelo" />
          Café da Vovó
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {navegacao.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-label text-espresso/80 transition-colors duration-150 hover:text-espresso"
              >
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <ReservationTrigger variant="primario" className="hidden shrink-0 sm:inline-flex">
          Reservar mesa
        </ReservationTrigger>
        <ReservationTrigger
          variant="primario"
          className="shrink-0 px-4 py-2 text-body-sm sm:hidden"
        >
          Reservar
        </ReservationTrigger>
      </nav>
    </header>
  );
}
