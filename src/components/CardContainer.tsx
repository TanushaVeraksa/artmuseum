import React from 'react'
import { useAppSelector } from '../hooks/redux';
import CardItem from './CardItem';
import Grid from '../styles/Grid';

const CardContainer = () => {
    
const {artsHome, isLoadingHome, errorHome} = useAppSelector(state => state.artsReducer);
  
  return (
    <div>
        {isLoadingHome && <h1>Loading...</h1>}
        {errorHome && <h1>{errorHome}</h1>}
        <Grid gap='16px'>
        {artsHome && artsHome.map(art => 
            <CardItem key={art.id} art={art} />
        )}
        </Grid> 
    </div>
  )
}

export default CardContainer