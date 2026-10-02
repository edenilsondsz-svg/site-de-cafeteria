import Image from "next/image";

type PageBannerProps = {
  titulo: string;
  subtitulo?: string;
  imagem: string;
};

export function PageBanner({ titulo, subtitulo, imagem }: PageBannerProps) {
  return (
    <section className="relative flex h-64 items-end overflow-hidden pt-28 md:h-80 md:pt-32">
      <Image src={imagem} alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(42,27,18,0.85) 0%, rgba(42,27,18,0.35) 60%, rgba(42,27,18,0.05) 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10">
        <h1 className="font-display text-display-md text-creme">{titulo}</h1>
        {subtitulo && (
          <p className="mt-2 max-w-xl text-body-lg text-creme/85">{subtitulo}</p>
        )}
      </div>
    </section>
  );
}
