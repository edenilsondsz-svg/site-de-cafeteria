# Guia de Estilo

## 1. Personalidade da marca

O Café da Vovó é uma cafeteria de bairro em Cornélio Procópio (PR), não uma rede. O site precisa parecer feito por gente que torra café de verdade — não um template de "food delivery". Três adjetivos guiam toda decisão visual:

- **Quente** — luz de fim de tarde, vapor, madeira, papel kraft.
- **Direta** — cardápio é informação (nome → preço), não decoração; a UI respeita isso.
- **Sem pressa** — nada pisca, nada grita "compre agora"; o convite é para sentar.

## 2. Direção de arte e fotografia

- **Fotografia real, não ilustração fofa.** A referência em `referencias/1.png.webp` usa ilustração digital de produto (milkshake 3D). Usamos fotografia real (banco gratuito, Pexels) com luz lateral quente — grão, crema, vapor, textura de espuma — porque reforça "cafeteria de bairro" em vez de "loja online de bebidas". Hoje isso já está em uso: hero, capas de categoria e cada item do cardápio têm foto real; `PhotoPlaceholder` só entra como fallback se um item ficar sem `imagem` no CSV.
- Enquadramentos assimétricos, nunca produto centralizado sobre fundo genérico. O hero e as faixas de banner (`PageBanner`, `CategoriaCapa`) são full-bleed — a foto ocupa a largura toda, com um scrim escuro (gradiente de `--color-espresso`) por trás do texto para legibilidade. Essa é a única situação do site em que texto claro (`--color-creme`/`--color-areia`) fica sobre fundo escuro fora do modo noturno — é uma exceção deliberada ao tema claro/escuro, não um bug: o hero sempre usa texto claro sobre a foto escurecida, independente de `prefers-color-scheme`.
- Evite still de estúdio com fundo branco liso — sempre inserir contexto (balcão, mesa de madeira, mão segurando xícara).
- **Cuidado na página Sobre:** nunca usar uma foto de banco de uma pessoa real e identificável legendada como se fosse literalmente um fundador nomeado (ex. "Vovó Alzira"). Prefira imagens atmosféricas — mãos servindo café, objetos (cafeteira antiga, caderno de receitas), o interior do espaço — em vez de retrato posado atribuído a uma pessoa específica que não existe.

## 3. Motivo de forma: o grão

O grão de café (duas metades em vírgula com friso central) é o único elemento gráfico decorativo permitido, usado com moderação em:

- divisor entre seções do cardápio;
- marcador de carregamento (gira lentamente, para em vez de girar infinito quando `prefers-reduced-motion`);
- favicon / marca d'água sutil no rodapé.

Não introduza outras formas decorativas (blobs, grades de pontos, gradientes de fundo) — se algo precisa de ênfase, use tipografia ou espaço em branco, não decoração.

## 4. O quadro-negro como dispositivo estrutural

O cardápio é a peça central do site. Em vez de cartões idênticos com sombra (o "kit SaaS"), o cardápio é tipografado como uma lousa de cafeteria: nome do item, linha pontilhada guia, preço — alinhados como uma lista, não como grade de cards. Isso é uma escolha de **informação** (o conteúdo é literalmente uma lista de preços), não estética emprestada. Ver `componentes.md` → Lista de Cardápio.

Na página `/cardapio`, esse dispositivo ganha uma variação: cada categoria abre com uma faixa full-bleed (`CategoriaCapa`, foto de capa + nome por cima — o momento de "virar a página") e cada linha da lousa ganha uma miniatura quadrada antes do nome. A lista continua sendo a informação primária (nome → preço), a foto é só contexto — nunca vira uma grade de cards genérica.

Numeração (01 / 02 / 03) só aparece onde o conteúdo é de fato sequencial — o único lugar legítimo no site é "Como funciona" (escolher → retirar → aproveitar). Em qualquer outro contexto, não numerar.

## 5. Tipografia como personalidade

- **Fraunces** (display/títulos) — serifa macia com ink traps, contraste moderado (não é uma serifa de alto contraste tipo Playfair). Ajuste o eixo óptico (`opsz`) para o modo "soft" em tamanhos grandes: isso dá o peso artesanal/quente sem cair no serifado editorial genérico.
- **Figtree** (UI/corpo) — geométrica-humanista com terminais arredondados, complementa a calidez da Fraunces sem competir. Substitui a Geist Sans do scaffold, que é neutra demais para carregar a marca.
- Geist Mono permanece disponível só para contextos tabulares reais (código de cupom, número de pedido) — não para rótulos de UI.

Ver escala completa em `tokens.md`.

## 6. Voz e tom

- Frases curtas, verbo ativo, em português coloquial de balcão — como se a pessoa estivesse pedindo o café pessoalmente.
- Botões descrevem a ação exata: "Ver cardápio", "Reservar mesa", "Pedir para retirar" — nunca "Saiba mais" genérico, nunca com seta (`→`) no final.
- Sem rótulos em CAIXA ALTA rastreados (ex.: "NOSSOS PRODUTOS"). Use frase normal, peso de fonte para hierarquia.
- Sem "eyebrow labels" acima de títulos (ex.: "CARDÁPIO —"). O título já comunica a seção.
- Estados vazios e erros falam na voz da interface, não da pessoa: dizem o que aconteceu e o que fazer a seguir, sem pedir desculpas.
  - Exemplo carrinho vazio: "Sua sacola está vazia. Dá uma olhada no cardápio."
  - Exemplo erro de pedido: "Não foi possível confirmar o pedido. Tente de novo em instantes."

## 7. Cor com significado, não decoração

Cada acento de cor mapeia a uma categoria real do cardápio (ver `tokens.md`) — bebidas de expresso → caramelo, bebidas geladas → musgo, doces → vinho, sanduíches → azulejo. Não introduza uma cor nova sem associá-la a uma categoria ou estado (sucesso/erro/aviso).

## 8. Motion

Uma única sequência orquestrada por carregamento de página é permitida: o vapor por trás da foto do hero sobe suavemente em loop lento (6–8s), nada mais anima sozinho. Todo o resto do motion responde a uma ação da pessoa (abrir menu, expandir item do cardápio, confirmar pedido) — nunca "fade-slide-up" automático seção por seção, e nunca hover com transições diferentes por componente. Respeitar sempre `prefers-reduced-motion: reduce` (o loop de vapor vira estático; a rotação do grão de carregamento vira um spinner sem easing decorativo).

## 9. Piso de qualidade (não negociável)

- Responsivo até 360px de largura.
- Foco de teclado sempre visível (usar o token `--ring` de `tokens.md`, nunca `outline: none` sem substituto).
- Contraste mínimo AA em todo texto sobre os fundos definidos em `tokens.md` (já validado nas combinações listadas).
- `prefers-reduced-motion` respeitado em todas as animações.
- `prefers-color-scheme: dark` suportado (modo "café da noite" — ver `tokens.css`).

## 10. O que evitar (clichês genéricos que já descartamos conscientemente)

| Clichê comum | Por que evitamos aqui |
|---|---|
| Fundo creme + serifa de alto contraste + acento terracota `#D97757` | Nossa base é creme (café pede tom quente), mas a serifa é macia (Fraunces, não alto contraste) e o acento é caramelo torrado `#A85D23`, mais marrom que rosado — ver `tokens.md`. |
| Cards idênticos com o mesmo raio e a mesma sombra cinza `rgba(0,0,0,.1)` em tudo | Raio e sombra variam por papel: lista de cardápio é chapada (papel), cards de produto têm sombra quente direcional, botões são pílula. |
| Rótulo eyebrow em CAIXA ALTA, meta com "·", label com "—", botão terminando em "→" | Nenhum desses aparece no site — ver seção 6. |
| Marcadores numerados 01/02/03 decorativos | Só usados onde o conteúdo é sequência real (seção "Como funciona"). |
| Ilustração 3D de produto flutuando sobre círculo colorido | Fotografia real com luz lateral, contexto de balcão/mesa. |
