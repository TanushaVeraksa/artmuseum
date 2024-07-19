import styled from 'styled-components';

const StyledCardText = styled.p`
font-size: ${({size}) => size || '0.9em'};
color: ${({color}) => color || '#393939'};
font-weight: ${({bold})=> bold || 400};
background-color: ${({background}) => background || '#FFFFFF'};
margin: ${({margin}) => margin || 0};
padding: ${({padding}) => padding || 0};
text-align: left;
overflow: hidden;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
'}
`


const CardText = (props) => {
  return <StyledCardText {...props}/>
}

export default CardText

