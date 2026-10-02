"use client";

import { useState } from "react";
import Image from "next/image";
import { CategoryBadge, SeloBadge } from "./CategoryBadge";
import { CategoriaCapa } from "./CategoriaCapa";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import type { SecaoCardapio } from "@/lib/cardapio";

export function MenuList({ secoes }: { secoes: SecaoCardapio[] }) {
  const [itemAberto, setItemAberto] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-14">
      {secoes.map((secao) => (
        <div key={secao.id}>
          <CategoriaCapa titulo={secao.titulo} imagem={secao.imagemCapa} />

          <div className="rounded-none border border-t-0 border-linha bg-creme p-6 md:p-10">
            <div className="mb-4">
              <CategoryBadge categoria={secao.titulo} />
            </div>

            <ul>
              {secao.itens.map((item) => {
                const chave = `${secao.id}-${item.nome}`;
                const aberto = itemAberto === chave;
                return (
                  <li key={chave} className="border-b border-dotted border-linha last:border-none">
                    <button
                      type="button"
                      onClick={() => setItemAberto(aberto ? null : chave)}
                      aria-expanded={aberto}
                      className="flex w-full items-center gap-4 py-4 text-left"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm">
                        {item.imagem ? (
                          <Image
                            src={item.imagem}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        ) : (
                          <PhotoPlaceholder className="h-full w-full" />
                        )}
                      </div>

                      <span className="font-display text-heading-md text-espresso">
                        {item.nome}
                      </span>

                      {item.selo && <SeloBadge texto={item.selo} />}

                      <span
                        className="flex-1 self-center border-b border-dotted border-linha"
                        aria-hidden="true"
                      />

                      <span className="font-display text-heading-md text-caramelo">
                        {item.preco}
                      </span>
                    </button>

                    {aberto && (
                      <div className="pb-4 pl-[4.5rem] text-body-sm text-espresso/75">
                        <p>{item.descricao}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
