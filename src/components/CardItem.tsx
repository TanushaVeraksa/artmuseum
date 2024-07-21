import React, { FC, useState } from 'react'
import { IArt } from '../models/IArt';
import { Link } from 'react-router-dom';
import { ReactComponent as Museum } from '../assets/museum.svg';
import CardText from '../styles/CardText';
import Button from '../styles/Button';
import { favoriteSlice } from '../store/reducers/FavoriteSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ReactComponent as VectorUnactive } from '../assets/vectorUnactive.svg';
import { ReactComponent as VectorActive } from '../assets/VectorActive.svg';
import Flex from '../styles/Flex';
import ImageContainer from '../styles/ImageContainer';

interface CardItemsProps {
    art: IArt;
    isFavoritePage?: boolean;
  }

const CardItem: FC<CardItemsProps> = ({art, isFavoritePage = false}: CardItemsProps) => {

  const dispatch = useAppDispatch();
  const {favorites} = useAppSelector(state => state.favoritesReducer);
  const existing = () => {
    const existFavorite = favorites.findIndex(f => f.id === art.id);
    return existFavorite < 0 ? false : true;
  }

  const [isClick, setIsClick] = useState(existing());

  const handleAdd = (favor: IArt) => { 
    dispatch(favoriteSlice.actions.addFavorite(favor));
    setIsClick(s => !s)   
  }

  const handleDelete = (favor: IArt) => {
    dispatch(favoriteSlice.actions.removeFavorite(favor));
    setIsClick(s => !s)   
  }

  return (
      <Flex width="100%" background="#FFFFFF" border="1px solid #F0F1F1" justify="space-between" align="center" padding="0.8em">
      <ImageContainer width='80px' height='80px'>
        <Link to={`/detail/${art.id}`}>
        { art.image_id ? 
          <img style={{objectFit:'cover', width:'100%', height:'100%'}} src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`} alt={art.title}/>
          :
          <Museum style={{objectFit:'cover', width:'100%', height:'100%', border: '1px solid #E0A449', padding: '16px 18px'}} />
        }
        </Link>
      </ImageContainer>
        <div style={{maxWidth: 150}}>
          <CardText size='1em' bold='bold' padding='0 10px 0 0'>{art.title}</CardText>
          <CardText color='#E0A449'>{art.artist_title}</CardText>
          <CardText bold='bold' margin='10px 0'>{art.is_public_domain ? 'Public' : 'Not Public'}</CardText>
        </div>
      {isFavoritePage ? 
        <Button color="#FBD7B24D" onClick={() => handleDelete(art)}><VectorActive/></Button> 
        :
      <>
        {isClick ? 
          <Button color="#FBD7B24D" onClick={() => handleDelete(art)}><VectorActive/></Button> 
        : 
          <Button onClick={() => handleAdd(art)}><VectorUnactive/></Button>
        } 
      </> 
      }
      </Flex>
  )
}

export default CardItem;
