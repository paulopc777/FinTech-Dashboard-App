interface Props {
  Code: string;
}

const URL = "https://economia.awesomeapi.com.br/json/last";

export const getValorCotacao = async ({ Code }: Props) => {
  try {
    const res = await fetch(`${URL}/${Code}`);

    if (res.status == 200) {
      const d = await res.json();
      return d;
    }
    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
};
