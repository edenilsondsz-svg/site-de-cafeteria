import Image from "next/image";

export function CategoriaCapa({ titulo, imagem }: { titulo: string; imagem: string }) {
  return (
    <div className="relative flex h-56 items-end overflow-hidden rounded-t-md md:h-72">
      <Image
        src={imagem}
        alt=""
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(42,27,18,0.75) 0%, rgba(42,27,18,0.15) 60%, rgba(42,27,18,0) 100%)",
        }}
      />
      <h2 className="relative px-6 pb-6 font-display text-heading-lg text-creme md:text-display-md">
        {titulo}
      </h2>
    </div>
  );
}
