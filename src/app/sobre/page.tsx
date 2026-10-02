import Image from "next/image";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/Button";
import { ReservationTrigger } from "@/components/reservation/ReservationTrigger";

export const metadata = {
  title: "Sobre nós | Café da Vovó",
  description: "A história por trás do Café da Vovó, em Cornélio Procópio.",
};

export default function Sobre() {
  return (
    <>
      <PageBanner
        titulo="A cozinha da vovó Alzira, de portas abertas"
        subtitulo="Cornélio Procópio, desde os anos 1970 — só que agora todo dia é domingo."
        imagem="/images/banner-sobre.webp"
      />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-body-lg text-espresso/80">
          Antes de virar cafeteria, isso aqui era só o domingo da família.
          Vovó Alzira torrava café em casa toda semana, numa panela de ferro
          que ainda mora atrás do balcão, e enchia a mesa de gente antes
          mesmo de acordar direito.
        </p>

        <div className="my-12 grid gap-8 sm:grid-cols-2 sm:items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md shadow-soft">
            <Image
              src="/images/sobre-cafe-coado.webp"
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-heading-lg text-espresso">
              Uma receita por domingo, quarenta anos seguidos
            </h2>
            <p className="mt-4 text-body-md text-espresso/75">
              Não tinha cardápio, tinha o que desse pra fazer com o que
              tinha em casa: pão de queijo assado no forno de lenha, bolo
              de fubá com erva-doce, café coado até a última gota. A vovó
              nunca escreveu essas receitas — ela só ensinava, de novo e de
              novo, até grudar.
            </p>
          </div>
        </div>

        <div className="my-12 grid gap-8 sm:grid-cols-2 sm:items-center">
          <div className="sm:order-2">
            <h2 className="font-display text-heading-lg text-espresso">
              A neta que voltou pra cidade
            </h2>
            <p className="mt-4 text-body-md text-espresso/75">
              Beatriz — a Bia — cresceu grudada naquela cozinha. Foi pra
              Curitiba estudar, virou barista, aprendeu tudo sobre torra e
              extração. E percebeu, longe de casa, que o café mais gostoso
              que ela já tinha tomado era o da vovó, feito sem pressa nenhuma.
            </p>
            <p className="mt-4 text-body-md text-espresso/75">
              Voltou pra Cornélio Procópio com o torrador antigo da avó
              debaixo do braço e abriu o Café da Vovó pra fazer, todos os
              dias, o que a vovó Alzira fazia só aos domingos: abrir a
              porta, forrar a mesa e esperar a casa encher.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md shadow-soft sm:order-1">
            <Image
              src="/images/sobre-neta-cafeteira.webp"
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-body-lg text-espresso/80">
          É por isso que sexta tem karaokê e sábado tem degustação: a vovó
          sempre disse que mesa vazia é desperdício. Se você vier, é bem
          capaz de sair conhecendo o vizinho de mesa.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <ReservationTrigger variant="primario">Reservar uma mesa</ReservationTrigger>
          <Button href="/cardapio" variant="secundario">
            Ver cardápio
          </Button>
        </div>
      </article>
    </>
  );
}
