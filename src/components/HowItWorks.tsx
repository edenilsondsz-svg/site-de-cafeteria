const passos = [
  {
    titulo: "Escolha no cardápio",
    texto: "Veja o que tem hoje e escolha pelo site ou no balcão.",
  },
  {
    titulo: "Retire no balcão",
    texto: "Seu pedido fica pronto no tempo de moer e coar.",
  },
  {
    titulo: "Aproveite",
    texto: "Fique na mesa ou leve — o copo é seu de qualquer jeito.",
  },
];

export function HowItWorks() {
  return (
    <ol className="grid gap-10 sm:grid-cols-3">
      {passos.map((passo, indice) => (
        <li key={passo.titulo} className="flex flex-col gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caramelo font-display text-heading-md text-creme">
            {indice + 1}
          </span>
          <h3 className="font-display text-heading-md text-espresso">
            {passo.titulo}
          </h3>
          <p className="text-body-md text-espresso/75">{passo.texto}</p>
        </li>
      ))}
    </ol>
  );
}
