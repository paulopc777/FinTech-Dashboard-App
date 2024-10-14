import { ReturnData } from "@/app/[Code]";

function FormateNumberNegative(variacao: number) {
  if (variacao < 0) return variacao * -1;
  if (variacao > 0) return variacao * 1;
  return variacao;
}

function limitarValor(valor: number, min: number, max: number) {
  if (valor < min) {
    return min;
  } else if (valor > max) {
    return max;
  }
  return valor; // Se o valor estiver dentro do intervalo, retorna o próprio valor
}

export function calculateVolatility(Data: ReturnData[]): number {
  const maxValue = Data.map((D) => {
    return parseFloat(D.high);
  });

  const minsValues = Data.map((D) => {
    return parseFloat(D.low);
  });

  const valorAnterior = Math.min(...minsValues);
  const valorAtual = Math.max(...maxValue);

  // Cálculo da variação percentual
  const variacao = ((valorAtual - valorAnterior) / valorAnterior) * 100;

  let resultado = limitarValor(
    parseInt((FormateNumberNegative(variacao) * 4).toFixed(2)),
    10,
    100
  );
  console.log(resultado);

  return resultado;
}

export function callRSI(Data: ReturnData[], index: number): number {
  const data = Data.map((d) => parseFloat(d.pctChange));

  let Gain = 0;
  let Loss = 0;

  data.forEach((E) => {
    if (E <= 0) {
      Loss++;
    }

    if (E > 0) {
      Gain++;
    }
    return;
  });

  const RSI = 100 - 100 / (index + Gain / Loss);
  console.log(RSI);
  return RSI;
}
