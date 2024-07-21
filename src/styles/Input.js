import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #3939390D;
  color: #39393980;
  border: none;
  border-radius: 16px;
  width: 700px;
  background-image: ${({image}) => `url(${image})` || ''};
  background-position:  95% 16px;
  background-repeat: no-repeat;
  padding: 23px 16px;
  box-sizing: border-box;
  font-size: 14px;
  &:focus {
    color: #393939; 
  }
`

const Input = (props) => {
  return <StyledInput {...props}/>
}

export default Input

