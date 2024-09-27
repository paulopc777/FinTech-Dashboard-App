export function ConverterMoedaParaFloat(valor: string) {
  // 1. Remover "R$" e espaços em branco
  let valorLimpo = valor.replace("R$", "").trim();

  valorLimpo = valorLimpo.replace(/\./g, "");

  // 2. Substituir a vírgula por ponto
   valorLimpo = valorLimpo.replace(",", ".");

  // 3. Remover os pontos que representam milhar
   

  // 4. Converter a string para float

  return parseFloat(valorLimpo);
}
