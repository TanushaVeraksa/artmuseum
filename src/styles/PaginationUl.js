import styled from 'styled-components';

const StyledUl = styled.ul`
list-style-type: none;
display: flex;
justify-content: flex-end;
align-items: center;
`
const PaginationUl = (props) => {
  return <StyledUl {...props}/>
}

export default PaginationUl

