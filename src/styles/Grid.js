import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
  justify-content: center;
  justify-items: center;
`


const Grid = (props) => {
  return <StyledGrid {...props}/>
}

export default Grid

