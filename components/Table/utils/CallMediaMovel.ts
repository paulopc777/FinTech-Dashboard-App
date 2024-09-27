import { ReturnData } from "@/app/[Code]";

export function calcularMediaMovel(
  cotacoes: ReturnData[],
  periodo: number
): number[] {
  const mediaMovel: number[] = [];

  for (let i = 0; i <= cotacoes.length ; i++) {
    const soma = cotacoes
      .slice(i, i + periodo)
      .reduce((acc, cotacao) => acc + parseFloat(cotacao.bid), 0);
    mediaMovel.push(soma / periodo);
  }

  console.log(mediaMovel)
  return mediaMovel;
}
