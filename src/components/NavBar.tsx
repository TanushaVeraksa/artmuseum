import { Link } from 'react-router-dom';
import Nav from '../styles/Nav';
import NavContainer from '../styles/NavContainer';
import { ReactComponent as Museum } from '../assets/museum.svg';
import { ReactComponent as Vector } from '../assets/vector.svg'; 
import NavSpan from '../styles/Span';


const Navbar = () => {
  return (
    <>
    <NavContainer>
        <Nav>
            <Link to="/">
            <Museum />
            </Link>
            <NavSpan align='flex-end'>Museum of <NavSpan color='#E0A449'>Art</NavSpan></NavSpan>
        </Nav>
        <Nav>
            <Link to="/favorite">
            <Vector/> 
            </Link>
            <NavSpan align='center'>Your favorites</NavSpan>
        </Nav>
    </NavContainer>
    </>
  )
}

export default Navbar