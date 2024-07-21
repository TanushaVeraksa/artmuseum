import Grid from "../styles/Grid";
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import CardItem from '../components/CardItem';
import { ReactComponent as Vector } from '../assets/bookmark.svg';
import Title from '../styles/Title';
import Span from '../styles/Span';
import { favoriteSlice } from '../store/reducers/FavoriteSlice';
import Flex from "../styles/Flex";
import Button from "../styles/Button";

const Favorites = () => {

  const {favorites} = useAppSelector(state => state.favoritesReducer);
  const dispatch = useAppDispatch();

  const handleClickDateDes = () => {
    dispatch(favoriteSlice.actions.dateSortDes());
  }

  const handleClickDateAsc = () => {
    dispatch(favoriteSlice.actions.dateSortAsc());
  }

  const handleClickTitleDes = () => {
    dispatch(favoriteSlice.actions.alphabetSortDes());
  }

  const handleClickTitleAsc = () => {
    dispatch(favoriteSlice.actions.alphabetSortAsc());
  }

  return (
    <Flex direction = 'column' justify="center" align="center">
      <Title margin="120px 0 0 0" transform="capitalize" weight="700" size="2.5em"> Here are your </Title>
      <Title margin="0 0 120px 0" transform="capitalize" weight="700" size="2.5em"><Span color="#F17900"><Vector/>favorites </Span></Title>
      <Title color='#E0A449'>Saved by you</Title>
      <Title margin="0 0 40px 0" size="2em">Your favorites list</Title>
      {favorites.length !== 0 &&
         <Flex direction='column' margin='0 0 20px 0'>
        <Flex align='center' margin='5px 0'>
          <Title>Sort <Span color="#F17900">Date</Span> alphabetically</Title>
          <Button margin='0 5px' padding='10px 7px' color="#F17900" onClick={() => handleClickDateDes()}>DEC</Button>
          <Button padding='10px 7px' color="#F17900" onClick={() => handleClickDateAsc()}>ASC</Button>
        </Flex>
        <Flex align='center'>
          <Title>Sort <Span color="#F17900">Title</Span> alphabetically</Title>
          <Button margin='0 5px' padding='10px 7px' color="#F17900" onClick={() => handleClickTitleDes()}>DES</Button>
          <Button padding='10px 7px' color="#F17900" onClick={() => handleClickTitleAsc()}>ASC</Button>
        </Flex>
      </Flex>
      }
      {favorites.length === 0 ? 
            <Title size="3em" margin="120px 0 120px 0">Favorites is empty!</Title>
         : 
        <Grid gap='16px' margin="0 0 120px 0">
        {favorites && favorites.map(art => 
            <CardItem key={art.id} art={art} isFavoritePage={true}/>
        )}
        </Grid> 
      }
    </Flex>
  )
}

  
export default Favorites;