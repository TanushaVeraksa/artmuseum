import ArtContainer from "../components/ArtContainer";
import CardContainer from "../components/CardContainer";
import Flex from '../styles/Flex';

const Home = () => {
    
    return (
      <Flex direction = 'column' justify="center" align="center">
        <p>let's find some art here!</p>
        <p>Topics for you</p>
        <p>Our special gallery</p>
      <ArtContainer/>
      <p>Here some more</p>
      <p>Other works for you</p>
      <CardContainer />
    </Flex>
    );
  }
  
export default Home;