import { Link } from 'react-router-dom';
import Nav from '../styles/Nav';
import NavContainer from '../styles/NavContainer';
import { ReactComponent as Museum } from '../assets/museum.svg';
import { ReactComponent as Modsen } from '../assets/logo-modsen.svg';
import Span from '../styles/Span';

const Footer = () => {
  return (
    <>
    <NavContainer background="#FFFFFF">
        <Nav>
            <Link to="/">
            <Museum />
            </Link>
            <Span  padding='0 0 0 10px' color="#393939" align='flex-end'>Museum of <Span weight='700' color='#E0A449'>Art</Span></Span>
        </Nav>
        <Nav>
            <Modsen/>
        </Nav>
    </NavContainer>
    </>
  )
}

export default Footer