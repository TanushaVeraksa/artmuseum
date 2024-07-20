import ArtContainer from "../components/ArtContainer";
import CardContainer from "../components/CardContainer";
import Flex from '../styles/Flex';
import Title from '../styles/Title';
import Span from '../styles/Span';

const Home = () => {
    
    return (
      <Flex direction = 'column' justify="center" align="center">
        <Title margin="120px 0 0 0" transform="capitalize" weight="700" size="2.5em" width="25%">let's find some <Span color="#F17900">art</Span> here!</Title>
        <Title color="#E0A449" margin="120px 0 0 0">Topics for you</Title>
        <Title size="2em" margin="0 0 40px 0">Our special gallery</Title>
      <ArtContainer/>
      <Title color="#E0A449" margin="120px 0 0 0">Here some more</Title>
      <Title size="2em" margin="0 0 40px 0">Other works for you</Title>
      <CardContainer />
    </Flex>
    );
  }
  
export default Home;