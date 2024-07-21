import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchArt } from '../store/actions/ActionCreator';
import { favoriteSlice } from '../store/reducers/FavoriteSlice';
import Flex from '../styles/Flex';
import CardText from '../styles/CardText';
import Span from '../styles/Span';
import Button from '../styles/Button';
import { ReactComponent as Museum } from '../assets/museum.svg';
import { ReactComponent as VectorUnactive } from '../assets/bookmark.svg';
import { IArt } from '../models/IArt';


const Detail = () => {
  const {art, isLoading, error} = useAppSelector(state => state.artReducer);
  const {id}= useParams();
  const idArt: number = Number(id);
  const {title, artist_title, image_id, department_title, dimensions, place_of_origin, credit_line, date_display} = art;
  const dispatch = useAppDispatch();
  const {favorites} = useAppSelector(state => state.favoritesReducer);

  const existing = () => {
    const existFavorite = favorites.findIndex(f => f.id === art.id);
    return existFavorite < 0 ? false : true;
  }

  const [isClick, setIsClick] = useState(existing());

  useEffect(() => {
     dispatch(fetchArt(idArt))
  }, [])

  const handleAdd = (favor: IArt) => { 
    dispatch(favoriteSlice.actions.addFavorite(favor));
    setIsClick(s => !s)   
  }

  const handleDelete = (favor: IArt) => {
    dispatch(favoriteSlice.actions.removeFavorite(favor));
    setIsClick(s => !s)   
  }

return (
  <Flex direction = 'column' justify="center" align="center" padding='120px 0'>
    <Flex>
    {isLoading && <h1>Loading...</h1>}
    {error && <h1>{error}</h1>}
        <div style={{overflow: 'hidden', width: '400px', height: '500px',  position: 'relative', zIndex: 0}}>
          {image_id ? 
            <img style={{objectFit:'cover', width:'100%', height:'100%'}} src={`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`} alt={title}/>
            :
            <Museum style={{objectFit:'cover', width:'100%', height:'100%'}}/>
          }
          <div style={{position: 'absolute', top:16, right:16, zIndex: 1}}>
          {isClick ? 
            <Button color="#FBD7B24D" onClick={() => handleDelete(art)}><VectorUnactive/></Button> 
          : 
            <Button onClick={() => handleAdd(art)}><VectorUnactive/></Button>
          } 
        </div>
      </div>
      <Flex justify="space-between" direction="column" margin="0 0 0 3em" max="640px">
        <Flex align="flex-start" direction="column">
          <CardText col='5' color="#393939" size='2em' line='40px' >{title}</CardText>
          <CardText col='5' color="#E0A449" size='1.2em' line='30px' margin="0.8em 0 0.5em">{artist_title}</CardText>
          <CardText col='5' weight='700'>{date_display}</CardText>
        </Flex>
        <Flex align="flex-start" direction="column">
          <CardText col='5' size='2em' line='40px' margin='0 0 2em 0'>Overview</CardText>
          <CardText col='5' margin='0 0 0.5em 0'>
            <Span color='#E0A449'>Artist nacionality: </Span>
            {place_of_origin}
          </CardText>
          <CardText col='5' margin='0 0 0.5em 0'>
            <Span color='#E0A449'>Dimensions: </Span>
            {dimensions} 
          </CardText>
          <CardText col='5' margin='0 0 0.5em 0'>
            <Span color='#E0A449'>Credit Line: </Span>
            {credit_line}
            </CardText>
          <CardText col='5' margin='0 0 0.5em 0'>
            <Span color='#E0A449'>Repository: </Span>
            {department_title}
          </CardText>
          <CardText bold='bold' margin='10px 0 0 '>{art.is_public_domain ? 'Public' : 'Not Public'}</CardText>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default Detail