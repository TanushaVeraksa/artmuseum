import axios from "axios";
import { AppDispatch } from "../store";
import { IArt } from "../../models/IArt";
import { artSlice } from "../reducers/ArtsSlice";

export const fetchArts =
  (page: number = 1, limit: number = 3) =>
  async (dispatch: AppDispatch) => {
    const params = page === 1 && limit === 9;
    try {
      params
        ? dispatch(artSlice.actions.artsHomeFetching())
        : dispatch(artSlice.actions.artsFetching());
      const response = await axios.get<{
        data: IArt[];
      }>(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`);
      params
        ? dispatch(artSlice.actions.artsHomeFetchingSuccess(response.data.data))
        : dispatch(artSlice.actions.artsFetchingSuccess(response.data.data));
    } catch (e) {
      if (axios.isAxiosError(e))
        params
          ? dispatch(artSlice.actions.artsHomeFetchingError(e.message))
          : dispatch(artSlice.actions.artsFetchingError(e.message));
    }
  };
