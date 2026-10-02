"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

const campoClasses =
  "rounded-sm border border-linha bg-areia px-4 py-3 text-body-md text-espresso";

export function ReservationForm() {
  const [confirmado, setConfirmado] = useState<{ nome: string; data: string; horario: string } | null>(
    null,
  );

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    setConfirmado({
      nome: String(dados.get("nome") ?? ""),
      data: String(dados.get("data") ?? ""),
      horario: String(dados.get("horario") ?? ""),
    });
  }

  if (confirmado) {
    return (
      <div className="rounded-md border border-linha bg-creme p-8">
        <p className="font-display text-heading-md text-espresso">
          Mesa reservada, {confirmado.nome}.
        </p>
        <p className="mt-2 text-body-md text-espresso/75">
          A gente te espera dia {confirmado.data} às {confirmado.horario}.
        </p>
        <button
          type="button"
          onClick={() => setConfirmado(null)}
          className="mt-4 text-label text-caramelo underline-offset-4 hover:underline"
        >
          Reservar outra mesa
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={aoEnviar} className="grid gap-5 rounded-md border border-linha bg-creme p-8 sm:grid-cols-2">
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-label text-espresso">Nome</span>
        <input name="nome" type="text" required className={campoClasses} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-label text-espresso">Data</span>
        <input name="data" type="date" required className={campoClasses} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-label text-espresso">Horário</span>
        <input name="horario" type="time" required className={campoClasses} />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-label text-espresso">Pessoas</span>
        <input
          name="pessoas"
          type="number"
          min={1}
          max={8}
          defaultValue={2}
          required
          className={`${campoClasses} sm:max-w-32`}
        />
      </label>

      <Button type="submit" variant="primario" className="sm:col-span-2 sm:w-fit">
        Reservar mesa
      </Button>
    </form>
  );
}
