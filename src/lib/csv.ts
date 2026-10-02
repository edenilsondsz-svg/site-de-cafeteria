/** Parser mínimo de CSV com suporte a campos entre aspas (que podem conter vírgulas). */
export function parseCsv(conteudo: string): string[][] {
  const linhas: string[][] = [];
  let campo = "";
  let linha: string[] = [];
  let dentroDeAspas = false;

  for (let i = 0; i < conteudo.length; i++) {
    const char = conteudo[i];

    if (dentroDeAspas) {
      if (char === '"') {
        if (conteudo[i + 1] === '"') {
          campo += '"';
          i++;
        } else {
          dentroDeAspas = false;
        }
      } else {
        campo += char;
      }
      continue;
    }

    if (char === '"') {
      dentroDeAspas = true;
    } else if (char === ",") {
      linha.push(campo);
      campo = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && conteudo[i + 1] === "\n") i++;
      linha.push(campo);
      campo = "";
      if (linha.length > 1 || linha[0] !== "") linhas.push(linha);
      linha = [];
    } else {
      campo += char;
    }
  }

  if (campo !== "" || linha.length > 0) {
    linha.push(campo);
    linhas.push(linha);
  }

  return linhas;
}
