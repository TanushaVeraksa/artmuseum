import styled from 'styled-components';

const StyledNavSpan = styled.span`
align-self: ${({align}) => align || 'stretch'};
color: ${({color}) => color || '#FFFFFF'};
}
`

const Span = (props) => {
  return <StyledNavSpan {...props}/>
}

export default Span
