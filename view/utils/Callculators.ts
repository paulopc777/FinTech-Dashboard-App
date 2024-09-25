import { ReturnData } from "@/app/[Code]";

export function FormatStringThoBRL(Value: string) {
  return parseFloat(Value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function calcularMediaBid(data: ReturnData[]): number {
  const bids = data
    .map((item) => parseFloat(item.bid))
    .filter((bid) => !isNaN(bid));

  if (bids.length === 0) {
    return 0;
  }

  // Calcula a média dos valores de bid
  const soma = bids.reduce((total, bid) => total + bid, 0);
  const media = soma / bids.length;

  return media;
}

export function filterBid(Data: any) {
  console.log(Data)
  return Data.map((c: any) => {
    return parseFloat(c.bid);
  });
}
