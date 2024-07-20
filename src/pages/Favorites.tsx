import Grid from "../styles/Grid";
import { useAppSelector } from '../hooks/redux';
import CardItem from '../components/CardItem';
import { ReactComponent as Vector } from '../assets/bookmark.svg';
import Title from '../styles/Title';
import Span from '../styles/Span';

const Favorites = () => {

  const {favorites} = useAppSelector(state => state.favoritesReducer);

  return (
    <div>
      <Title margin="120px 0 0 0" transform="capitalize" weight="700" size="2.5em"> Here are your </Title>
      <Title margin="0 0 120px 0" transform="capitalize" weight="700" size="2.5em"><Span color="#F17900"><Vector/>favorites </Span></Title>
      <Title color='#E0A449'>Saved by you</Title>
      <Title margin="0 0 40px 0" size="2em">Your favorites list</Title>
      {favorites.length === 0 ? 
            <Title size="3em" margin="120px 0 120px 0">Favorites is empty!</Title>
         : 
        <Grid gap='16px' margin="0 0 120px 0">
        {favorites && favorites.map(art => 
            <CardItem key={art.id} art={art} isFavoritePage={true}/>
        )}
        </Grid> 
      }
    </div>
  )
}

  
export default Favorites;