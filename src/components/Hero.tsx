import Image from "next/image";
import { Button } from "./Button";
import { ReservationTrigger } from "./reservation/ReservationTrigger";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[36rem] items-end overflow-hidden sm:min-h-[42rem]">
      <Image
        src="/images/hero-cafe.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(42,27,18,0.9) 0%, rgba(42,27,18,0.55) 45%, rgba(42,27,18,0.15) 75%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 pb-16 pt-40 sm:pb-24">
        <div className="pointer-events-none flex gap-2 opacity-70">
          <span className="h-10 w-1.5 rounded-full bg-creme/70 animate-vapor" />
          <span
            className="h-8 w-1.5 rounded-full bg-creme/70 animate-vapor"
            style={{ animationDelay: "1.1s" }}
          />
          <span
            className="h-9 w-1.5 rounded-full bg-creme/70 animate-vapor"
            style={{ animationDelay: "2.3s" }}
          />
        </div>

        <h1 className="max-w-lg text-balance font-display text-display-md text-creme md:text-display-lg">
          Café coado, doce fresco e uma mesa esperando por você
        </h1>
        <p className="max-w-md text-body-lg text-creme/85">
          Café da Vovó é a cafeteria do bairro em Cornélio Procópio que
          torra o próprio café e assa o próprio pão de queijo. Sem pressa,
          sem copo descartável para quem fica.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <ReservationTrigger variant="primario">Reservar uma mesa</ReservationTrigger>
          <Button
            href="/cardapio"
            variant="secundario"
            className="!border-creme !text-creme hover:!bg-creme/10"
          >
            Ver cardápio completo
          </Button>
        </div>
      </div>
    </section>
  );
}
