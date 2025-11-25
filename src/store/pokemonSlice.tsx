import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type PokemonListApiType } from "../api/DataApi";
import axios from "axios";

// First, create the thunk
export const fetchPokemon = createAsyncThunk(
  "pokemon/fetch",
  async (nextUrl?: string) => {
    const url = nextUrl || "https://pokeapi.co/api/v2/pokemon";
    const response = await axios.get(url);
    return response.data;
  }
);

interface PokemonState {
  pokemons: PokemonListApiType;
  loading: boolean;
}

const initialState = {
  pokemons: {
    count: 0,
    next: "",
    results: [],
  },
  loading: false,
} as PokemonState;

// Then, handle actions in your reducers:
const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPokemon.fulfilled,
        (state, action: PayloadAction<PokemonListApiType>) => {
          state.loading = false;
          //중복방지: 이미 있는 포켓몬 이름은 append안함
          const newResults = action.payload.results.filter(
            (p) => !state.pokemons.results.some((r) => r.name === p.name)
          );
          state.pokemons = {
            count: action.payload.count,
            next: action.payload.next,
            results: [...state.pokemons.results, ...newResults],
          };
        }
      )
      .addCase(fetchPokemon.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const pokemonReducer = PokemonSlice.reducer;
