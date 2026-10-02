import fs from "node:fs";
import path from "node:path";
import { parseCsv } from "./csv";

export type CategoriaCardapio =
  | "Bebidas de expresso"
  | "Bebidas geladas"
  | "Doces"
  | "Sanduíches";

export type ItemCardapio = {
  categoria: CategoriaCardapio;
  nome: string;
  descricao: string;
  preco: string;
  selo?: string;
  imagem?: string;
};

export type SecaoCardapio = {
  id: string;
  titulo: CategoriaCardapio;
  imagemCapa: string;
  itens: ItemCardapio[];
};

const imagensPorCategoria: Record<CategoriaCardapio, string> = {
  "Bebidas de expresso": "/images/categoria-bebidas-expresso.webp",
  "Bebidas geladas": "/images/categoria-bebidas-geladas.webp",
  Doces: "/images/categoria-doces.webp",
  Sanduíches: "/images/categoria-sanduiches.webp",
};

function lerItens(): ItemCardapio[] {
  const caminho = path.join(process.cwd(), "docs/design/menu-itens.csv");
  const conteudo = fs.readFileSync(caminho, "utf-8");
  const [, ...linhas] = parseCsv(conteudo);

  return linhas
    .filter((linha) => linha.some((campo) => campo.trim() !== ""))
    .map((linha) => {
      const [categoria, nome, descricao, preco, selo, imagem] = linha;
      return {
        categoria: categoria as CategoriaCardapio,
        nome,
        descricao,
        preco,
        selo: selo ? selo.trim() : undefined,
        imagem: imagem ? imagem.trim() : undefined,
      };
    })
    .map((item) => ({
      ...item,
      selo: item.selo || undefined,
      imagem: item.imagem || undefined,
    }));
}

export function getCardapio(): SecaoCardapio[] {
  const itens = lerItens();
  const secoes: SecaoCardapio[] = [];

  for (const item of itens) {
    let secao = secoes.find((s) => s.titulo === item.categoria);
    if (!secao) {
      secao = {
        id: item.categoria.toLowerCase().replace(/[^a-zà-ú0-9]+/gi, "-"),
        titulo: item.categoria,
        imagemCapa: imagensPorCategoria[item.categoria],
        itens: [],
      };
      secoes.push(secao);
    }
    secao.itens.push(item);
  }

  return secoes;
}

export function getPopulares(): ItemCardapio[] {
  return lerItens().filter((item) => item.selo);
}
