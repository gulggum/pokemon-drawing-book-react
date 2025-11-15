import axios from "axios";

const remote = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 2000,
});

export interface PokemonListApiType {
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const dataListApi = async (endpoint: string) => {
  try {
    const getData = await remote.get<PokemonListApiType>(endpoint);
    const list = getData.data;
    return list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export interface DetailType {
  id: number;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
  stats: StatItemType[];
  image: string;

  color: { name: string };
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
  koreanName: string;
}

export interface StatItemType {
  base_stat: number;
  effort: number;
  stat: {
    name: string; //hp
    url: string;
  };
}

export const detailApi = async (name: string) => {
  const getData = await remote.get<DetailType>(`pokemon/${name}`);
  const getSpecies = await remote.get<DetailType>(`pokemon-species/${name}`);
  const koreanName =
    getSpecies.data.names.find((item) => item.language.name === "ko")?.name ??
    "unknown";

  const { id, height, weight } = getData.data;
  const { front_default } = getData.data.sprites;
  const type = getData.data.types.map((item) => item.type.name);
  const statInfo = getData.data.stats.map((item) => item.stat.name);

  return { id, height, weight, type, image: front_default, koreanName };
};
