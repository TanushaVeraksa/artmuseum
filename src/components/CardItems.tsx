import React, { FC } from 'react'
import { IArt } from '../models/IArt';
import { Link } from 'react-router-dom';
import { ReactComponent as Museum } from '../assets/museum.svg';

interface CardItemsProps {
    art: IArt;
    isFavoritePage?: boolean;
  }

const CardItems: FC<CardItemsProps> = ({art, isFavoritePage = false}: CardItemsProps) => {
  return (
    <div>
        <Link to={`/detail/${art.id}`}>
        <div>
        { art.image_id ? 
          <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`} alt={art.title}/>
          :
          <Museum />
        }
        </div>
        </Link>
    </div>
  )
}

export default CardItems;