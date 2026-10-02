import { proximaOcorrencia } from "@/lib/datas";
import { ReservationTrigger } from "./reservation/ReservationTrigger";

const eventos = [
  {
    nome: "Karaokê",
    diaSemana: 5,
    horario: "20h às 23h",
    horaFim: "23:00",
    texto: "Toda sexta a gente tira o pó do microfone. Escolha a música, peça um expresso, cante.",
  },
  {
    nome: "Degustação de café",
    diaSemana: 6,
    horario: "9h às 11h",
    horaFim: "11:00",
    texto: "Sábado de manhã a gente abre grãos novos e prova junto com quem quiser aparecer.",
  },
];

export function EventsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {eventos.map((evento) => (
        <article
          key={evento.nome}
          className="flex flex-col gap-3 rounded-md border border-linha bg-creme p-6"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-heading-md text-espresso">{evento.nome}</h3>
            <span className="text-body-sm font-medium text-caramelo">{evento.horario}</span>
          </div>
          <p className="text-body-md text-espresso/75">{evento.texto}</p>
          <p className="text-body-sm text-espresso/55">
            Próxima: {proximaOcorrencia(evento.diaSemana, evento.horaFim)}
          </p>
          <ReservationTrigger variant="secundario" className="mt-2 w-fit">
            Reservar uma mesa
          </ReservationTrigger>
        </article>
      ))}
    </div>
  );
}
