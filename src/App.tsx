import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { fetchArts } from './store/actions/ActionCreators';
import { favoriteSlice } from "./store/reducers/FavoriteSlice";

function App() {

  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(fetchArts());
    dispatch(fetchArts(1, 9))
    const favorite = localStorage.getItem('favoriteItems');
    const existingFavorites = favorite !== null ? JSON.parse(favorite) : [];
    dispatch(favoriteSlice.actions.getFavorite(existingFavorites));
  }, [])

  return <>
  <NavBar/>
  <Outlet/>
  </>;
}

export default App;
