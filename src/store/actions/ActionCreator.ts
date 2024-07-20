import axios from "axios";
import { AppDispatch } from "../store";
import { IArt } from "../../models/IArt";
import { artSlice } from "../reducers/ArtSlice";

export const fetchArt = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(artSlice.actions.artFetching());
    const response = await axios.get<{
      data: IArt;
    }>(`https://api.artic.edu/api/v1/artworks/${id}`);
    dispatch(artSlice.actions.artFetchingSuccess(response.data.data));
  } catch (e) {
    if (axios.isAxiosError(e))
      dispatch(artSlice.actions.artFetchingError(e.message));
  }
};
