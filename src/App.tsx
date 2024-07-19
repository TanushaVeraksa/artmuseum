import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { fetchArts } from './store/actions/ActionCreators';

function App() {

  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(fetchArts())
  }, [])

  return <>
  <NavBar/>
  <Outlet/>
  </>;
}

export default App;
