# Especificação de Componentes

Convenções gerais: componentes React em `src/components/`, estilizados com classes utilitárias Tailwind v4 usando os tokens de `tokens.css`. Nomes de classe abaixo são ilustrativos (mapeiam direto para utilitários Tailwind já que os tokens estão registrados em `@theme`).

---

## Cabeçalho / Navegação

**Propósito:** acesso a Cardápio, Sobre nós, Como funciona e ação de reservar, sempre visível, em todas as rotas (`/`, `/sobre`, `/cardapio`) — vive em `src/app/layout.tsx`, não é duplicado por página.

**Anatomia:** logo (wordmark "Café da Vovó" em Fraunces 600 + ícone de grão) → itens de navegação (Figtree, `--text-label`, sentence case: Cardápio → `/cardapio`, Sobre nós → `/sobre`, Como funciona → `/#como-funciona`) → um único CTA primário "Reservar mesa" que abre o modal de reserva (não navega para lugar nenhum — ver "Modal de reserva").

**Estados:** transparente sobre o hero/banner até 24px de scroll; depois assume `--color-creme` com `--shadow-soft` e o texto permanece `--color-espresso` (sem inverter para header escuro).

**Tokens:** `--color-creme`, `--color-espresso`, `--text-label`, `--space-6`, `--duration-base`, `--ease-padrao` na transição de fundo.

**Acessibilidade:** logo é link para `/` com texto acessível "Café da Vovó, página inicial"; item ativo marcado com `aria-current="page"` e sublinhado de 2px `--color-caramelo` (não só cor, para não depender só de contraste de cor).

```tsx
<header className="fixed inset-x-0 top-0 z-50 transition-colors duration-200">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    ...
  </nav>
</header>
```

---

## Botões

Três variantes, cada uma com um papel fixo — não escolher por preferência visual, escolher pelo papel da ação.

| Variante | Raio | Uso | Exemplo de texto |
|---|---|---|---|
| **Primário** (preenchido, `--color-caramelo`, texto `--color-creme`) | `--radius-full` (pílula) | Única ação de conversão por tela (pedir, reservar, confirmar) | "Pedir para retirar" |
| **Secundário** (contorno 1.5px `--color-espresso`, fundo transparente) | `--radius-full` | Ação alternativa de mesmo peso visual reduzido | "Ver cardápio completo" |
| **Texto/ghost** (sem fundo, sublinhado no hover) | — | Ações terciárias, links inline | "Cancelar" |

**Estados:** hover escurece para `--color-caramelo-escuro` (primário) ou preenche `--color-areia` a 8% (secundário); focus usa `:focus-visible` do token global; disabled reduz opacidade para 45% e remove hover.

**Regra:** nunca mais de um botão primário visível na mesma tela. Nunca sufixo "→".

```tsx
<button className="inline-flex items-center justify-center rounded-full bg-caramelo px-6 py-3 text-label font-semibold text-creme transition-colors duration-150 hover:bg-caramelo-escuro">
  Pedir para retirar
</button>
```

---

## Badge de categoria

**Propósito:** identificar a categoria de um item do cardápio — não decorativo, é filtro/metadado. Chaveado direto pela string literal da coluna `categoria` do CSV (`docs/design/menu-itens.csv`), sem camada de tradução.

**Anatomia:** pílula pequena (`--radius-full`), cor de fundo mapeada à categoria (10% de opacidade da cor de acento sobre `--color-creme`), texto na cor sólida do acento.

| Categoria (string do CSV) | Cor |
|---|---|
| Bebidas de expresso | `--color-caramelo` |
| Bebidas geladas | `--color-musgo` |
| Doces | `--color-vinho` |
| Sanduíches | `--color-azulejo` |

**Acessibilidade:** cor nunca é o único sinal — o nome da categoria é sempre texto, não só cor.

```tsx
<span className="inline-flex items-center rounded-full bg-caramelo/10 px-3 py-1 text-body-sm font-medium text-caramelo">
  Bebidas de expresso
</span>
```

---

## Lista de Cardápio (dispositivo estrutural principal — página `/cardapio`)

**Propósito:** apresentar todas as categorias e itens do `docs/design/menu-itens.csv` como uma lista legível e escaneável, com a sensação de folhear um cardápio real — o cardápio é a informação central do site.

**Anatomia:** para cada categoria, empilhado (não lado a lado): `CategoriaCapa` (faixa full-bleed `h-56 md:h-72`, foto de capa da categoria + scrim + nome em Fraunces por cima — o momento de "virar a página") seguida do contêiner da lista (`--radius-none` no topo por conta da capa acima, `--shadow-none`, fundo `--color-creme`, borda 1px `--color-linha`, sem borda no topo). Cada item é uma linha: miniatura quadrada (`h-14 w-14`, `--radius-sm`, `object-cover`, da coluna `imagem` do CSV) + nome (`--text-heading-md`, Fraunces) + selo inline quando o CSV tiver um (ver "Selo") + linha pontilhada (`border-bottom: 1px dotted var(--color-linha)`, `flex: 1`) + preço (`--text-heading-md`, Fraunces, `--color-caramelo`).

**Layout:**
```
[foto] Nome do item  [Popular]  ..................... R$ 12,00
       descrição curta, some/aparece ao clicar
```

**Responsivo:** sempre coluna única, categorias empilhadas em sequência (não duas colunas lado a lado — isso quebrava a sensação de "virar uma página por vez").

**Interação:** ao tocar/clicar num item, expande inline (altura anima com `--duration-base`/`--ease-padrao`) mostrando a descrição — não abre modal.

```tsx
<li className="border-b border-dotted border-linha last:border-none">
  <button className="flex w-full items-center gap-4 py-4 text-left">
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm">
      <Image src={item.imagem} alt="" fill className="object-cover" />
    </div>
    <span className="font-display text-heading-md">{item.nome}</span>
    {item.selo && <SeloBadge texto={item.selo} />}
    <span className="flex-1 self-center border-b border-dotted border-linha" aria-hidden="true" />
    <span className="font-display text-heading-md text-caramelo">{item.preco}</span>
  </button>
</li>
```

---

## Card de Produto ("Mais pedidos" na Home, não o cardápio inteiro)

**Propósito:** dar destaque aos itens do CSV que têm `selo` preenchido (Popular / Favorito da casa) na Home — único lugar do site com foto de produto em card.

**Anatomia:** foto (proporção 4:5, `--radius-md`, da coluna `imagem` do CSV, fallback `PhotoPlaceholder` se vazia), pill de selo sobreposta no canto superior esquerdo da foto quando o item tem `selo`, sobre `--color-creme`, `--shadow-soft` em repouso, `--shadow-lift` no hover (`--duration-base`), nome + preço abaixo da foto no mesmo padrão tipográfico da lista de cardápio (mantém consistência com o dispositivo principal).

```tsx
<article className="group overflow-hidden rounded-md bg-creme shadow-soft transition-shadow duration-200 hover:shadow-lift">
  <div className="relative aspect-[4/5] w-full">
    <Image src={item.imagem} alt="" fill className="object-cover" />
    {item.selo && <div className="absolute left-2 top-2"><SeloBadge texto={item.selo} /></div>}
  </div>
  <div className="flex items-baseline justify-between px-4 py-3">
    <span className="font-display text-heading-md">{item.nome}</span>
    <span className="font-display text-heading-md text-caramelo">{item.preco}</span>
  </div>
</article>
```

---

## Hero

**Propósito:** primeira impressão — comunica "cafeteria de bairro, café de verdade" em um olhar. Só na Home (`/`).

**Anatomia:** full-bleed — foto real de fundo (`next/image fill object-cover`, `priority`) cobrindo a seção inteira, com um scrim (`linear-gradient` de `--color-espresso` a ~90% embaixo até transparente em cima) para legibilidade. Texto sobre o scrim em `--color-creme`/`--color-areia` (ver a exceção de tema documentada em `guia-de-estilo.md` §2). Título `--text-display-lg` (Fraunces), um parágrafo de apoio `--text-body-lg`, um botão primário (`ReservationTrigger`, abre o modal de reserva) e um secundário (`Button href="/cardapio"`, com as cores do variant `secundario` sobrescritas com `!` para funcionar sobre fundo escuro — ver nota de especificidade abaixo). Vapor animado (`--motion-vapor-loop`) sutil perto do título, estático se `prefers-reduced-motion`.

**Regra:** sem badge eyebrow acima do título, sem headline com uma palavra destacada em cor/itálico — o peso todo do título é uniforme; nunca mais de um botão primário na tela (o secundário nunca some `ReservationTrigger`).

**Nota de especificidade CSS:** quando um `Button`/`ReservationTrigger` precisa de cores diferentes das do seu variant (ex. `secundario` claro sobre foto escura em vez do claro padrão sobre fundo claro), sobrescreva com o modificador `!` do Tailwind (`!border-creme !text-creme`) em vez de só listar a classe depois no `className` — utilitários Tailwind têm a mesma especificidade entre si, então a ordem escrita no JSX não garante qual "vence" no CSS gerado; só `!important` garante.

---

## Selo (tag de atributo — vem direto da coluna `selo` do CSV: "Popular" ou "Favorito da casa")

**Anatomia:** mesma pílula pequena do badge de categoria, mas sempre em `--color-musgo` (reserva essa cor para o selo, distinto do uso em categoria "bebidas geladas"). Componente `SeloBadge`, separado de `CategoryBadge` mas no mesmo arquivo (`CategoryBadge.tsx`).

---

## Modal de reserva

**Propósito:** o botão "Reservar mesa"/"Reservar uma mesa" (Header, Hero, Footer, e CTAs de fechamento das páginas Sobre/Cardápio/Eventos) abre um formulário em modal — não navega para uma seção da página nem para uma rota própria.

**Anatomia:** `<dialog>` nativo (`ReservationDialog.tsx`), sem dependência nova — foco preso e ESC-para-fechar vêm de graça do navegador. `showModal()`/`close()` chamados via `ReservationContext` (`ReservationProvider`, montado uma vez em `src/app/layout.tsx`, com um único `<dialog>` para o site inteiro). Clique no backdrop fecha (checando `e.target === e.currentTarget` no `onClick` do próprio `<dialog>`). Conteúdo interno reaproveita a estilização e a lógica de campos/confirmação do `ReservationForm` sem alterações (`rounded-md border border-linha bg-creme p-8`); um botão de fechar (✕, `aria-label="Fechar"`) fica sobreposto no canto superior direito.

**Gatilho:** `ReservationTrigger` — botão cliente pequeno que chama `useReservation().abrir()`, usado em qualquer lugar do site sem precisar transformar a página inteira em client component.

**Acessibilidade:** ESC fecha; clique fora fecha; foco volta ao botão que abriu ao fechar; Tab não escapa do diálogo aberto (garantido pelo `<dialog>` nativo).

**Campos e comportamento:** nome, número de pessoas, data e horário preferidos — sem back-end. O envio só confirma visualmente na tela (mesmo padrão de antes, ver "Estados vazios e erro" para o texto de confirmação). Não há e-mail, WhatsApp ou API por trás — é uma decisão deliberada, não uma lacuna a preencher sem avisar.

---

## Seção de eventos (Home, `/#eventos`)

**Propósito:** mostrar os dois eventos recorrentes da casa — Karaokê (sextas, 20h–23h) e Degustação de café (sábados, 9h–11h) — com a data da próxima ocorrência calculada, não estática.

**Anatomia:** dois cartões lado a lado a partir de `sm` (`rounded-md border border-linha bg-creme p-6`, mesmo papel visual do card de reserva). Cada cartão: nome do evento (`--text-heading-md`, Fraunces) + horário (`--text-body-sm`, `--color-caramelo`), uma linha de descrição, a data calculada ("Próxima: sexta, 3 de outubro" — via `proximaOcorrencia()` em `src/lib/datas.ts`), e um `ReservationTrigger` variante secundária (nunca dois botões primários na mesma tela).

**Regra:** sem foto — a seção fica deliberadamente quieta/tipográfica; a ousadia visual da página já foi gasta na foto do hero e nas fotos do cardápio.

---

## Formulário (reserva de mesa)

**Anatomia:** label sempre visível acima do campo (nunca só placeholder), input com `--radius-sm`, borda 1px `--color-linha`, foco com `:focus-visible` padrão. Botão de envio é sempre primário, texto descreve a ação ("Reservar mesa", não "Enviar"). Campos: nome, data, horário, número de pessoas (1–8). Vive dentro do modal de reserva (ver acima) em toda página do site, não mais numa seção estática própria.

**Erro de validação:** mensagem abaixo do campo, `--color-erro`, `--text-body-sm`, com ícone; nunca só a borda vermelha.

---

## Rodapé

**Anatomia:** fundo `--color-espresso`, texto `--color-areia`. Colunas: marca, navegação (Cardápio, Sobre nós, Como funciona, Reservar mesa — este último abre o modal via `useReservation()`, não é um link comum), endereço/horário (genérico: "Centro, Cornélio Procópio — PR", sem número de rua inventado) + redes sociais (ícones simples, sem fundo colorido). Marca d'água do grão de café em opacidade baixa (5%) como único elemento decorativo, alinhada ao princípio do motivo de forma único.

**Nota de especificidade CSS:** o link "Reservar mesa" do rodapé é um botão simples estilizado igual aos demais itens da navegação (não reaproveita as classes de cor do `Button` compartilhado) — o rodapé é escuro e o `Button` foi pensado para fundo claro, então evitar a sobreposição de utilitários de cor aqui evita o mesmo problema de especificidade descrito em Hero.

---

## Estados vazios e erro

Seguem a voz definida em `guia-de-estilo.md` §6 — dizem o que aconteceu e o que fazer, sem tom de desculpa.

| Contexto | Texto |
|---|---|
| Reserva confirmada (implementado) | "Mesa reservada, {nome}. A gente te espera dia {data} às {horário}." + link "Reservar outra mesa" |
| Sacola vazia (referência futura) | "Sua sacola está vazia. Dá uma olhada no cardápio." + botão primário "Ver cardápio" |
| Item indisponível (referência futura) | "Esse item está em falta hoje." (substitui o preço na lista, mesma tipografia, cor `--color-aviso`) |
| Erro ao confirmar reserva (referência futura, se um back-end for adicionado) | "Não foi possível confirmar a reserva. Tente de novo em instantes." + botão secundário "Tentar novamente" |
| Busca sem resultado (referência futura) | "Nada no cardápio bate com isso. Tente outro termo." |
