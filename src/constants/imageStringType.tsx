export const POKEMON_IMAGE_TYPE = {
  FRONT_DEFAULT: "officialArt",
  FRONT_SHINY: "front_shiny",
  BACK_SHINY: "back_shiny",
} as const; //=> 값 그대로의 리터럴 타입으로 고정("officialArt" | "front_shiny" | "back_shiny" 이런 식)
