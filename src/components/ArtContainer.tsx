import { useAppSelector } from '../hooks/redux';
import Grid from '../styles/Grid';
import ArtItem from './ArtItem';
import Pagination from './Pagination';

const ArtContainer = () => {

const {arts, isLoading, error} = useAppSelector(state => state.artsReducer);

  return (
    <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <Grid gap='15px'>
        {arts && arts.map(art => 
            <ArtItem key={art.id} art={art} />
        )}
        </Grid>    
        <Pagination/>
    </div>
  )
}

export default ArtContainer