import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { POKEMON_IMAGE_TYPE } from "../constants/imageStringType";

export type PokemonImageKeyType =
  (typeof POKEMON_IMAGE_TYPE)[keyof typeof POKEMON_IMAGE_TYPE];

export interface ImageTypeState {
  selectedType: PokemonImageKeyType;
}

const initialState: ImageTypeState = {
  selectedType: POKEMON_IMAGE_TYPE.FRONT_DEFAULT,
};

export const ImageSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    selectType: (state, action: PayloadAction<PokemonImageKeyType>) => {
      state.selectedType = action.payload;
    },
  },
});

export const { selectType } = ImageSlice.actions;

export const imageTypeReducer = ImageSlice.reducer; //실제 store에 등록되는 reducer
