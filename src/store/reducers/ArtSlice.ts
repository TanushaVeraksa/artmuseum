import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArt } from "../../models/IArt";

interface ArtState {
  arts: IArt[];
  isLoading: boolean;
  error: string;
  artsHome: IArt[];
  isLoadingHome: boolean;
  errorHome: string;
}

const initialState: ArtState = {
  arts: [],
  isLoading: false,
  error: "",
  artsHome: [],
  isLoadingHome: false,
  errorHome: "",
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
    artsHomeFetching(state) {
      state.isLoadingHome = true;
    },
    artsHomeFetchingSuccess(state, action: PayloadAction<IArt[]>) {
      state.isLoadingHome = false;
      state.errorHome = "";
      state.artsHome = action.payload;
    },
    artsHomeFetchingError(state, action: PayloadAction<string>) {
      state.isLoadingHome = false;
      state.errorHome = action.payload;
    },
  },
});

export default artSlice.reducer;
