import { useAppSelector } from '../hooks/redux';
import Flex from '../styles/Flex';
import Grid from '../styles/Grid';
import ArtItem from './ArtItem';

const ArtContainer = () => {

const {arts, isLoading, error} = useAppSelector(state => state.artsReducer);

  return (
    <div>
        <Flex direction = 'column' justify="center" align='center'>
            <p>let's find some art here!</p>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <Grid>
            {arts && arts.map(art => 
               <ArtItem key={art.id} art={art} />
            )}
            </Grid>            
        </Flex>
    </div>
  )
}

export default ArtContainer