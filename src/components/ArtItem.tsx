import { FC } from 'react'
import { IArt } from '../models/IArt'
import { Link } from 'react-router-dom';
import CardText from '../styles/CardText';
import Flex from '../styles/Flex';
import { ReactComponent as Museum } from '../assets/museum.svg';

interface ArtItemProps {
  art: IArt;
}

const ArtItem: FC<ArtItemProps> = ({art}: ArtItemProps) => {

  return (
    <div style={{position: 'relative'}}> 
      <div style={{position: 'relative', zIndex: 1, width: 300}}>
        <Link to={`/detail/${art.id}`}>
        <div style={{overflow: 'hidden', height:250, position: 'relative'}}>
        {art.image_id ? 
          <img style={{objectFit:'cover', width:'100%', height:'100%'}} src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`} alt={art.title}/>
          :
          <Museum style={{objectFit:'cover', width:'100%', height:'100%', position:'absolute', top:0, left:0}}/>
        }
        </div>
        </Link>
      </div>

       <Flex style={{position: 'relative', zIndex: 2, top:-30}} align="center" justify="space-between" padding="17px 24px" border="1px solid #F0F1F1" width="280px" background='#FFFFFF'> 
        <Flex direction="column" align="flex-start" background='#FFFFFF'>
          <CardText size='1em' bold='bold' margin='10px 0' padding='0 10px 0 0'>{art.title}</CardText>
          <CardText color='#E0A449'>{art.artist_title}</CardText>
        </Flex>
      </Flex>
    </div>
  )
}

export default ArtItem