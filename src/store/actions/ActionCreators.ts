import axios from "axios";
import { AppDispatch } from "../store";
import { IArt } from "../../models/IArt";
import { artSlice } from "../reducers/ArtSlice";

export const fetchArts =
  (page: number = 1, limit: number = 3) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(artSlice.actions.artsFetching());
      const response = await axios.get<{
        data: IArt[];
      }>(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`);
      dispatch(artSlice.actions.artsFetchingSuccess(response.data.data));
    } catch (e) {
      if (axios.isAxiosError(e))
        dispatch(artSlice.actions.artsFetchingError(e.message));
    }
  };
