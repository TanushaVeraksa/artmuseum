import styled from 'styled-components';

const StyledNav = styled.div`
display: flex;
align-items: center;
}
`

const Nav = (props) => {
  return <StyledNav {...props}/>
}

export default Nav

