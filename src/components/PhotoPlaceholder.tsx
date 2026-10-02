import { BeanIcon } from "./icons/BeanIcon";

type PhotoPlaceholderProps = {
  className?: string;
};

/**
 * Substituto temporário até termos fotografia real (ver guia-de-estilo.md §2:
 * macro com luz lateral quente, grão/crema/vapor). Mantém a proporção e o
 * raio definidos nos componentes que a usam.
 */
export function PhotoPlaceholder({ className }: PhotoPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle at 28% 22%, color-mix(in srgb, var(--color-creme) 55%, transparent), transparent 60%), linear-gradient(135deg, var(--color-caramelo) 0%, var(--color-caramelo-escuro) 55%, var(--color-espresso) 100%)",
      }}
      aria-hidden="true"
    >
      <div className="flex h-full items-center justify-center">
        <BeanIcon className="h-10 w-16 text-creme/25" />
      </div>
    </div>
  );
}
