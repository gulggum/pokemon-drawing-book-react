import axios from "axios";

const remote = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 2000,
});

export interface PokemonListApiType {
  count: number;
  next: string;
  results: { name: string; url: string }[];
}

export const dataListApi = async (nextUrl?: string) => {
  try {
    const requestUrl = nextUrl ?? "https://pokeapi.co/api/v2/pokemon";
    const getData = await remote.get<PokemonListApiType>(requestUrl);
    const list = getData.data;
    return list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export interface DetailType {
  statInfo: any;
  type: any;
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
    front_shiny: string;
    back_default: string;
  };
  stats: StatItemType[];
  color: {
    name: string;
  };
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
  console.log(getSpecies);
  const koreanName =
    getSpecies.data.names.find((item) => item.language.name === "ko")?.name ??
    "unknown";

  const { id, height, weight } = getData.data;
  const { name: color } = getSpecies.data.color;
  const { front_default, front_shiny, back_default } = getData.data.sprites;
  const type = getData.data.types.map((item) => item.type.name);
  const statInfo = getData.data.stats.map((name) => {
    return {
      name: name.stat.name,
      value: name.base_stat,
    };
  });
  const sprites = {
    front_default,
    front_shiny,
    back_default,
  };

  return {
    id,
    height,
    weight,
    color,
    type,
    sprites,
    koreanName,
    statInfo,
  };
};
