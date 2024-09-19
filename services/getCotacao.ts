interface Props {
  Code: string;
}

const URL = "https://economia.awesomeapi.com.br/json/last";

export async function getValorCotacao({ Code }: Props) {
  const res = await fetch(`${URL}/${Code}`);

  if (res.status == 200) {
    const d = await res.json();
    return d;
  }
  return false;
}
