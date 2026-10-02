# Tokens de Design

Todos os valores abaixo existem prontos para uso em `tokens.css` (sintaxe `@theme` do Tailwind CSS v4, mesma convenção já usada em `src/app/globals.css`).

## 1. Cor

### Paleta base (modo claro — "café de dia")

| Token | Hex | Uso |
|---|---|---|
| `--color-espresso` | `#2A1B12` | Texto principal, fundos escuros (rodapé, header em scroll), ícones |
| `--color-areia` | `#F3E2C7` | Fundo padrão da página — creme mais amarelado/quente que o "cream" genérico de IA (`#F4F1EA`) |
| `--color-creme` | `#FBF6EC` | Superfície de cartão sobre o fundo areia (contraste sutil, não branco puro) |
| `--color-caramelo` | `#A85D23` | Acento primário — CTAs, links, foco visual. Marrom-caramelo torrado, deliberadamente mais escuro/marrom que o terracota-salmão `#D97757` |
| `--color-caramelo-escuro` | `#7A4319` | Hover/active do caramelo |
| `--color-musgo` | `#46603F` | Acento secundário — categoria "bebidas frias/chá", selos (ex. "orgânico"), sucesso |
| `--color-vinho` | `#8C3547` | Acento terciário — categoria "doces", destaques especiais |
| `--color-azulejo` | `#2F5D66` | Acento quaternário — categoria "sanduíches". Azul-esverdeado (~195° de matiz), a maior separação possível das outras três cores (caramelo ~25°, musgo ~100°, vinho ~345°); nome vem do azulejo de cozinha/cafeteria, mantendo a lógica não-literal já usada nas outras cores |
| `--color-linha` | `#DCC9A8` | Bordas, divisores, linha pontilhada do cardápio |

### Paleta escura (modo "café da noite")

| Token | Hex | Uso |
|---|---|---|
| `--color-espresso-noite` | `#120B07` | Fundo padrão no modo escuro |
| `--color-areia-noite` | `#EAD9BC` | Texto principal no modo escuro |
| `--color-creme-noite` | `#1E140D` | Superfície de cartão no modo escuro |
| `--color-caramelo-noite` | `#D08A4E` | Acento primário no modo escuro (mais claro para manter contraste AA sobre `#120B07`) |
| `--color-azulejo-noite` | `#6FA3AC` | Acento quaternário no modo escuro (mesma lógica do caramelo-noite: mais claro para manter AA) |
| `--color-linha-noite` | `#3A2A1C` | Bordas/divisores no modo escuro |

### Estados

| Token | Hex | Uso |
|---|---|---|
| `--color-erro` | `#B3261E` | Mensagens de erro, validação |
| `--color-aviso` | `#8A5A00` | Avisos (ex. item sem estoque) |
| `--color-foco` | `#A85D23` | Anel de foco de teclado (mesmo do caramelo, mas sempre sólido e 2px) |

**Contraste verificado (AA, texto normal):** `espresso` sobre `areia` = 11.2:1 · `caramelo` sobre `areia` = 4.6:1 · `areia-noite` sobre `espresso-noite` = 13.8:1 · `azulejo` sobre `creme` = 6.77:1 · `azulejo` sobre `areia` = 5.74:1 · `azulejo-noite` sobre `espresso-noite` = 6.98:1.

## 2. Tipografia

Famílias carregadas via `next/font/google`, substituindo Geist Sans (Geist Mono permanece só para dados tabulares, ver `guia-de-estilo.md` §5).

| Token | Família | Papel |
|---|---|---|
| `--font-display` | `Fraunces` (peso 600–680, `opsz` alto/"soft") | Títulos H1–H3, números de preço em destaque |
| `--font-sans` | `Figtree` (peso 400/500/600) | UI, corpo de texto, navegação, botões |
| `--font-mono` | `Geist Mono` (já presente no projeto) | Código de cupom, número de pedido |

### Escala tipográfica (base 16px, razão ~1.25)

| Token | Tamanho | Line-height | Peso | Fonte | Uso |
|---|---|---|---|---|---|
| `--text-display-lg` | 3.5rem / 56px | 1.05 | 660 | Fraunces | H1 do hero |
| `--text-display-md` | 2.5rem / 40px | 1.1 | 640 | Fraunces | H1 de página interna |
| `--text-heading-lg` | 1.75rem / 28px | 1.2 | 600 | Fraunces | H2 de seção |
| `--text-heading-md` | 1.375rem / 22px | 1.3 | 600 | Fraunces | H3, nome de item de cardápio |
| `--text-body-lg` | 1.125rem / 18px | 1.6 | 400 | Figtree | Parágrafo de destaque |
| `--text-body-md` | 1rem / 16px | 1.6 | 400 | Figtree | Corpo padrão |
| `--text-body-sm` | 0.875rem / 14px | 1.5 | 400 | Figtree | Legendas, metadados |
| `--text-label` | 0.9375rem / 15px | 1.2 | 600 | Figtree | Botões, itens de navegação (sentence case, nunca caixa alta) |

Comprimento de linha alvo: ≤ 72 caracteres no corpo (Figtree), até 80 em blocos longos de Fraunces (serifa tolera linha um pouco mais longa).

## 3. Espaçamento

Escala em múltiplos de 4px (compatível com o espaçamento padrão do Tailwind — não redefine a escala global, só nomeia os múltiplos usados com intenção):

| Token | Valor | Uso típico |
|---|---|---|
| `--space-2` | 0.5rem / 8px | Gap entre ícone e label |
| `--space-3` | 0.75rem / 12px | Padding interno de badge |
| `--space-4` | 1rem / 16px | Padding de botão (vertical) |
| `--space-6` | 1.5rem / 24px | Gap entre itens de lista de cardápio |
| `--space-8` | 2rem / 32px | Padding de card |
| `--space-12` | 3rem / 48px | Gap entre blocos dentro de uma seção |
| `--space-20` | 5rem / 80px | Padding vertical de seção (mobile) |
| `--space-32` | 8rem / 128px | Padding vertical de seção (desktop) |

## 4. Raio (varia por papel do componente, de propósito — ver `guia-de-estilo.md` §10)

| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | 0 | Contêiner da lista de cardápio (efeito "lousa/papel") |
| `--radius-sm` | 0.375rem / 6px | Inputs, badges pequenos |
| `--radius-md` | 0.875rem / 14px | Cards de produto/foto |
| `--radius-full` | 9999px | Botões primários, badge de categoria, campo de busca |

## 5. Sombra

Sombras usam a cor espresso com baixa opacidade (nunca preto puro `rgba(0,0,0,.1)` genérico) e são direcionais, não um blur simétrico igual em tudo:

| Token | Valor | Uso |
|---|---|---|
| `--shadow-none` | `none` | Lista de cardápio (chapada, como papel) |
| `--shadow-soft` | `0 8px 20px -4px rgba(42, 27, 18, 0.16)` | Card de produto em repouso |
| `--shadow-lift` | `0 14px 28px -6px rgba(42, 27, 18, 0.22)` | Card de produto em hover/focus |

## 6. Motion

| Token | Valor |
|---|---|
| `--duration-fast` | 120ms |
| `--duration-base` | 200ms |
| `--duration-slow` | 400ms |
| `--ease-padrao` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-enfatico` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--motion-vapor-loop` | 7000ms, `--ease-padrao`, infinito, translateY sutil (só no hero; vira estático com `prefers-reduced-motion`) |

## 7. Breakpoints

Alinhados aos padrões do Tailwind v4 (não redefinidos, só documentados como referência de layout):

| Nome | Largura mínima |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Grade de conteúdo: coluna única até `md`; a partir de `md`, hero e seções de destaque usam duas colunas assimétricas (60/40), nunca grade uniforme de 12 colunas para o cardápio — a lista de cardápio permanece de coluna única até `lg`, e só então vira duas colunas lado a lado (mantendo cada coluna com linha pontilhada própria).
