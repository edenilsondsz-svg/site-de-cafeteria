import { Hero } from "@/components/Hero";
import { ProductHighlights } from "@/components/ProductHighlights";
import { EventsSection } from "@/components/EventsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Button } from "@/components/Button";
import { getPopulares } from "@/lib/cardapio";

export default function Home() {
  const populares = getPopulares();

  return (
    <>
      <Hero />

      <section id="mais-pedidos" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 font-display text-heading-lg text-espresso">
          Mais pedidos
        </h2>
        <ProductHighlights itens={populares} />
        <div className="mt-8">
          <Button href="/cardapio" variant="texto">
            Ver cardápio completo
          </Button>
        </div>
      </section>

      <section id="eventos" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-8 font-display text-heading-lg text-espresso">
          Próximos eventos
        </h2>
        <EventsSection />
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 font-display text-heading-lg text-espresso">
          Como funciona
        </h2>
        <HowItWorks />
      </section>
    </>
  );
}
