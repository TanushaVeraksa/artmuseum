import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArt } from "../../models/IArt";

interface ArtState {
  isLoading: boolean;
  error: string;
  art: IArt;
}

const initialState: ArtState = {
  isLoading: false,
  error: "",
  art: {
    id: 0,
    title: "",
    artist_title: "",
    image_id: "",
    department_title: "",
    dimensions: "",
    place_of_origin: "",
    credit_line: "",
    date_display: "",
    is_public_domain: false,
    date_start: 0,
  },
};

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    artFetching(state) {
      state.isLoading = true;
    },
    artFetchingSuccess(state, action: PayloadAction<IArt>) {
      state.isLoading = false;
      state.error = "";
      state.art = action.payload;
    },
    artFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default artSlice.reducer;
