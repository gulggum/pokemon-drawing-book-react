import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataListApi, type PokemonListApiType } from "../api/DataApi";

// Thunk액션 dispatch()할때 필요 // 액션 자체를 export
export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons", //slice 이름/액션 구분용
  async (nextUrl?: string) => {
    const response = await dataListApi(nextUrl); //실제 api호출
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
  reducers: {},
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

        //무한스크롤=>기존 results+새 results누적
        state.data.results = [...state.data.results, ...action.payload.results];
        state.data.next = action.payload.next;
        state.data.count = action.payload.count;
      })
      //rejected:api 호출실패
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "데이터를 불러오지 못했습니다.";
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
