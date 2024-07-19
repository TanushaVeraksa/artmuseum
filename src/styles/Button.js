import styled from 'styled-components';

const StyledButton = styled.button`
padding: 17px 20px;
background-color: ${({color}) => color || '##F9F9F9'};
border: ${({border}) => border || 'none'};
border-radius: 50%;
}
`


const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button

