import { useAppSelector } from '../hooks/redux';
import Grid from '../styles/Grid';
import ArtItem from './ArtItem';
import Pagination from './Pagination';

const ArtContainer = () => {

const {arts, isLoading, error} = useAppSelector(state => state.artsReducer);

  return (
    <div>
        <p>let's find some art here!</p>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <Grid>
        {arts && arts.map(art => 
            <ArtItem key={art.id} art={art} />
        )}
        </Grid>    
        <Pagination/>
    </div>
  )
}

export default ArtContainer