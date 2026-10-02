import type { CategoriaCardapio } from "@/lib/cardapio";

const categorias: Record<CategoriaCardapio, { classes: string }> = {
  "Bebidas de expresso": { classes: "bg-caramelo/10 text-caramelo" },
  "Bebidas geladas": { classes: "bg-musgo/10 text-musgo" },
  Doces: { classes: "bg-vinho/10 text-vinho" },
  Sanduíches: { classes: "bg-azulejo/10 text-azulejo" },
};

export function CategoryBadge({ categoria }: { categoria: CategoriaCardapio }) {
  const { classes } = categorias[categoria];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-body-sm font-medium ${classes}`}
    >
      {categoria}
    </span>
  );
}

export function SeloBadge({ texto }: { texto: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-musgo/10 px-3 py-1 text-body-sm font-medium text-musgo">
      {texto}
    </span>
  );
}
