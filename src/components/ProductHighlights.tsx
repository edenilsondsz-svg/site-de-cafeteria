import Image from "next/image";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { SeloBadge } from "./CategoryBadge";
import type { ItemCardapio } from "@/lib/cardapio";

export function ProductHighlights({ itens }: { itens: ItemCardapio[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {itens.map((item) => (
        <article
          key={item.nome}
          className="group overflow-hidden rounded-md bg-creme shadow-soft transition-shadow duration-200 hover:shadow-lift"
        >
          <div className="relative aspect-[4/5] w-full">
            {item.imagem ? (
              <Image
                src={item.imagem}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            ) : (
              <PhotoPlaceholder className="h-full w-full" />
            )}
            {item.selo && (
              <div className="absolute left-2 top-2">
                <SeloBadge texto={item.selo} />
              </div>
            )}
          </div>
          <div className="flex items-baseline justify-between gap-2 px-4 py-3">
            <span className="font-display text-heading-md text-espresso">
              {item.nome}
            </span>
            <span className="font-display text-heading-md text-caramelo">
              {item.preco}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
