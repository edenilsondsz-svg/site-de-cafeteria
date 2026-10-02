/**
 * Calcula a próxima data (a partir de agora) em que cai um determinado dia da
 * semana, formatada em pt-BR. Se hoje for o dia do evento e o horário de
 * término ainda não tiver passado, retorna "hoje".
 */
export function proximaOcorrencia(
  diaSemana: number,
  horaFim: string,
  agora: Date = new Date(),
): string {
  const [horaFimH, horaFimM] = horaFim.split(":").map(Number);

  const fimDeHoje = new Date(agora);
  fimDeHoje.setHours(horaFimH, horaFimM, 0, 0);

  let diasAte = (diaSemana - agora.getDay() + 7) % 7;
  if (diasAte === 0 && agora > fimDeHoje) {
    diasAte = 7;
  }

  if (diasAte === 0) {
    return "hoje";
  }

  const data = new Date(agora);
  data.setDate(agora.getDate() + diasAte);

  const formatado = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(data);

  return formatado.charAt(0).toUpperCase() + formatado.slice(1);
}
