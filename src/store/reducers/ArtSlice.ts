import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArt } from "../../models/IArt";

interface ArtState {
  arts: IArt[];
  isLoading: boolean;
  error: string;
}

const initialState: ArtState = {
  arts: [],
  isLoading: false,
  error: "",
};

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    artsFetching(state) {
      state.isLoading = true;
    },
    artsFetchingSuccess(state, action: PayloadAction<IArt[]>) {
      state.isLoading = false;
      state.error = "";
      state.arts = action.payload;
    },
    artsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default artSlice.reducer;
