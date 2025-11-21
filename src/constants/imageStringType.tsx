export const POKEMON_IMAGE_TYPE = {
  FRONT_DEFAULT: "front_default",
  FRONT_SHINY: "front_shiny",
  BACK_DEFAULT: "back_default",
} as const; //=> 값 그대로의 리터럴 타입으로 고정("officialArt" | "front_shiny" | "back_shiny" 이런 식)
