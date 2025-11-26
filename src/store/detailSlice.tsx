import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { detailApi } from "../api/DataApi";

interface PokemonDetailApiReturn {
  id: number;
  height: number;
  weight: number;
  color: string;
  type: string[];
  sprites: { front_default: string; front_shiny: string; back_default: string };
  koreanName: string;
  statInfo: { name: string; value: number }[];
}

// Thunk액션 dispatch()할때 필요 // 액션 자체를 export
export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchDetail", //slice 이름/액션 구분용
  async (name: string) => {
    const result = await detailApi(name); //실제 api호출
    return result; //fulfilled 액션 payload로 전달됨
  }
);

//slice 타입정의
export interface PokemonDetailState {
  loading: boolean; //api 요청 중이면 true
  error: string | null; // 에러 메시지 저장
  data: PokemonDetailApiReturn | null; //실제 api결과 저장
}

//초기상태
const initialState: PokemonDetailState = {
  loading: false,
  error: null,
  data: null,
};

// Then, handle actions in your reducers:
export const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    //기존꺼 초기화
    clearDetail: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  }, //동기 액션 정의
  extraReducers: (builder) => {
    builder
      //pending : api호출시작
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPokemonDetail.fulfilled,
        (state, action: PayloadAction<PokemonDetailApiReturn>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      //rejected:api 호출실패
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "데이터를 불러오지 못했습니다.";
      });
  },
});

export const { clearDetail } = pokemonDetailSlice.actions;
export const pokemonDetailReducer = pokemonDetailSlice.reducer;
