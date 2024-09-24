function calcularMediaBid(data: CurrencyData[]): number {
  // Filtra os itens que possuem o valor de bid e converte para número
  const bids = data
    .map((item) => parseFloat(item.bid))
    .filter((bid) => !isNaN(bid));

  // Se não houver valores de bid válidos, retorna 0
  if (bids.length === 0) {
    return 0;
  }

  // Calcula a média dos valores de bid
  const soma = bids.reduce((total, bid) => total + bid, 0);
  const media = soma / bids.length;

  return media;
}
