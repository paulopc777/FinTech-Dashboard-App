interface Props {
  Code: string;
  Days?: string;
}

const URL = "https://economia.awesomeapi.com.br/json/last";
const URL_A = "https://economia.awesomeapi.com.br/json/daily";

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

export const getAllDataCotacao = async ({ Code, Days }: Props) => {
  try {
    const d = Days ? Days : 7;
    const res = await fetch(`${URL_A}/${Code}/${d}`);

    if (res.status == 200) {
      const d = await res.json();
      return d;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
