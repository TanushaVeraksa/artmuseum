import styled from 'styled-components';

const StyledLI = styled.li`
background-color: ${({background}) => background || 'none'};
padding: 0.8em 1em;
color: ${({color}) => color || '#393939'};
border-radius: 5px;
font-size: 1em;
font-weight: 600;
cursor: pointer;
transform: ${({transform}) => transform || ''};
display: ${({display}) => display || 'inline-block'};
`
const PaginationLI = (props) => {
  return <StyledLI {...props}/>
}

export default PaginationLI

