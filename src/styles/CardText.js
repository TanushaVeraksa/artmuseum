import styled from 'styled-components';

const StyledCardText = styled.p`
font-size: ${({size}) => size || '1em'};
color: ${({color}) => color || '#393939'};
font-weight: ${({weight})=> weight || 400};
margin: ${({margin}) => margin || 0};
padding: ${({padding}) => padding || 0};
text-align: ${({text}) => text || "left"};
line-height: ${({line}) => line || '20px'};
overflow: hidden;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: ${({col}) => col || 1};
-webkit-box-orient: vertical;
'}
`


const CardText = (props) => {
  return <StyledCardText {...props}/>
}

export default CardText

