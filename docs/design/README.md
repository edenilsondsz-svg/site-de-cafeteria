# Sistema de Design — Cafeteria

Este diretório reúne o sistema de design completo do site da cafeteria, construído a partir de:

- **Base de código atual** — projeto Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, ainda no estado inicial do `create-next-app` (fontes Geist, sem componentes próprios). Ver `src/app/`.
- **Referência visual** — `docs/design/referencias/1.png.webp`, um hero de e-commerce de café/doces (marca fictícia "Onea"): fundo creme aquecido, fotografia/ilustração de produto em destaque sobre um círculo colorido, badges circulares de categoria, navegação enxuta, botão em pílula. Usamos essa referência como ponto de partida de **tom** (quente, apetitoso, acolhedor) — não como layout a clonar. As decisões de paleta, tipografia e estrutura abaixo são próprias desta marca, para evitar repetir o mesmo template.

> A marca é **Café da Vovó**, cafeteria de bairro em Cornélio Procópio (PR). O nome "Grão" que aparecia nas primeiras versões deste sistema era só um placeholder provisório e já foi substituído em todos os documentos e componentes.

## Como usar

1. **`guia-de-estilo.md`** — personalidade da marca, direção de arte/fotografia, voz e tom, princípios de layout e motion, tabela do que evitar (clichês genéricos).
2. **`tokens.md`** — tokens de design documentados (cor, tipografia, espaçamento, raio, sombra, motion, breakpoints) com a razão de cada escolha.
3. **`tokens.css`** — os mesmos tokens já escritos como CSS custom properties no formato `@theme` do Tailwind v4, prontos para colar em `src/app/globals.css`.
4. **`componentes.md`** — especificação de cada componente de UI (anatomia, variantes, estados, tokens usados, notas de acessibilidade, exemplo de classes Tailwind).

## Como aplicar na base de código

- O projeto usa Fraunces (display) + Figtree (UI) via `next/font/google` em `src/app/layout.tsx`, e Geist Mono só para contextos tabulares — já implementado.
- `globals.css` usa a sintaxe `@theme inline` do Tailwind v4 mapeando `--color-*` a partir de variáveis em `:root`/`prefers-color-scheme`. `tokens.css` mantém paridade byte-a-byte com esse arquivo — qualquer mudança de token precisa ser feita nos dois.
- O site tem 3 rotas: `/` (início), `/sobre` (história) e `/cardapio` (cardápio completo). Header, Footer e o modal de reserva ficam no `src/app/layout.tsx` (chrome compartilhado), não duplicados por página — ver `componentes.md`.
- Fotografia real (Pexels) já é o padrão em todo o site — hero, capas de categoria e cada item do cardápio. `PhotoPlaceholder` continua existindo só como fallback para quando a coluna `imagem` do CSV está vazia.
