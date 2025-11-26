import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemonSlice";
import { imageTypeReducer } from "./imageTypeSlice";
import { useDispatch } from "react-redux";
import { pokemonDetailReducer } from "./detailSlice";

//스토어 생성
export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    imageType: imageTypeReducer,
    detail: pokemonDetailReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;

// TypeScript용 타입 유틸
export type RootState = ReturnType<typeof store.getState>;
// RootState: store의 전체 state 타입
// useSelector 쓸 때 state 타입 추론 가능

export type AppDispatch = typeof store.dispatch;
// AppDispatch: store의 dispatch 타입
// useDispatch<AppDispatch> 쓸 때 자동으로 thunk 액션 타입까지 추론 가능
