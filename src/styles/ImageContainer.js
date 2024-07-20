import styled from 'styled-components';

const StyledImage = styled.image`
position: 'relative';
width: ${({width}) => width || '100px'};
height: ${({height}) => height || '100px'};
}
`


const ImageContainer = (props) => {
  return <StyledImage {...props}/>
}

export default ImageContainer

