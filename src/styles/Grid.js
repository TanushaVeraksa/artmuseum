import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: ${({gap}) => gap || 0};
  justify-content: center;
  justify-items: center;
  margin: ${({margin}) => margin || 0};
`


const Grid = (props) => {
  return <StyledGrid {...props}/>
}

export default Grid

