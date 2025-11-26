import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataListApi, type PokemonListApiType } from "../api/DataApi";

// Thunk액션 dispatch()할때 필요 // 액션 자체를 export
export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons", //slice 이름/액션 구분용
  async (url: string | undefined) => {
    const response = await dataListApi(url); //실제 api호출
    return response; //fulfilled 액션 payload로 전달됨
  }
);

//slice 타입정의
interface PokemonState {
  loading: boolean; //api 요청 중이면 true
  error: string | null; // 에러 메시지 저장
  data: PokemonListApiType; //실제 api결과 저장
}

//초기상태
const initialState: PokemonState = {
  loading: false,
  error: null,
  data: {
    count: 0,
    next: "", //다음 페이지 url
    results: [], //포켓몬 배열리스트
  },
};

// Then, handle actions in your reducers:
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {}, //동기 액션 정의
  extraReducers: (builder) => {
    builder
      //pending : api호출시작
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //fulfilled: api호출 성공
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      //rejected:api 호출실패
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "데이터를 불러오지 못했습니다.";
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
