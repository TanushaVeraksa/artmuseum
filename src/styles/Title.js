import styled from 'styled-components';

const StyledParagraf = styled.p`
color: ${({color}) => color || '#393939'};
font-weight: ${({weight})=> weight || 400};
text-align: ${({text}) => text || "center"};
font-size: ${({size}) => size || '1em'};
text-transform: ${({transform}) => transform || 'none'};
width: ${({width}) => width || 'auto'};
margin: ${({margin}) => margin || 0};
}
`

const Title = (props) => {
  return <StyledParagraf {...props}/>
}

export default Title
