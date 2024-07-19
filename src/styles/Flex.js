import styled from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-direction: ${({direction}) => direction || 'row'};
align-items: ${({align}) => align || 'stretch'};
align-content: ${({content}) => content || 'stretch'};
justify-content: ${({justify}) => justify || 'stretch'};
margin: ${({margin}) => margin || 0};
padding: ${({padding}) => padding || 0};
width: ${({width}) => width || 'auto'};
height: ${({height}) => height || 'auto'};
background-color: ${({background}) => background || '#FAFAFA'};
border: ${({border}) => border || 'none'}
}
`


const Flex = (props) => {
  return <StyledFlex {...props}/>
}

export default Flex

