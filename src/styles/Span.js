import styled from 'styled-components';

const StyledNavSpan = styled.span`
align-self: ${({align}) => align || 'stretch'};
color: ${({color}) => color || '#FFFFFF'};
padding: ${({padding}) => padding || 0};
font-weight: ${({weight})=> weight || 400};
}
`

const Span = (props) => {
  return <StyledNavSpan {...props}/>
}

export default Span
