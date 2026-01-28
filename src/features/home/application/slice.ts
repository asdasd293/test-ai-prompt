import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { HomeData } from "../domain/models";
import { loadHomeData } from "./usecases/loadHomeData";

// Async thunk
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    return await loadHomeData();
  },
);

// State interface
interface HomeState {
  data: HomeData | null;
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  data: null,
  loading: false,
  error: null,
};

// Slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    clearHomeData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load home data";
      });
  },
});

export const { clearHomeData } = homeSlice.actions;
export default homeSlice.reducer;
