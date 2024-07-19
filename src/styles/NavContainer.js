import styled from 'styled-components';

const StyledNav = styled.div`
display: flex;
justify-content: space-around;
background-image: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
padding: 1em 0;
}
`

const NavContainer = (props) => {
  return <StyledNav {...props}/>
}

export default NavContainer

