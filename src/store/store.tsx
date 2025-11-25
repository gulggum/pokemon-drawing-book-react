import { configureStore } from "@reduxjs/toolkit";
import { imageTypeReducer } from "./imageTypeSlice";
import { useDispatch } from "react-redux";
import { pokemonReducer } from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    imageType: imageTypeReducer,
    pokemon: pokemonReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
