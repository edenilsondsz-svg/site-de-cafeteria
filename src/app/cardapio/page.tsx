import { PageBanner } from "@/components/PageBanner";
import { MenuList } from "@/components/MenuList";
import { ReservationTrigger } from "@/components/reservation/ReservationTrigger";
import { getCardapio } from "@/lib/cardapio";

export const metadata = {
  title: "Cardápio | Café da Vovó",
  description: "Café especial, doces frescos e lanches leves — o cardápio completo do Café da Vovó.",
};

export default function Cardapio() {
  const secoes = getCardapio();

  return (
    <>
      <PageBanner
        titulo="Cardápio"
        subtitulo="Preço de balcão, sem letra miúda."
        imagem="/images/banner-cardapio.webp"
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <MenuList secoes={secoes} />

        <div className="mt-14 flex justify-center">
          <ReservationTrigger variant="secundario">Reservar uma mesa</ReservationTrigger>
        </div>
      </div>
    </>
  );
}
