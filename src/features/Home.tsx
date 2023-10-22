import Container from 'react-bootstrap/esm/Container';
const profile = require('../images/Profile.jpg');

const Home = () => {
  return (
    <Container>
      <br />
      <br />
      <img src={profile} alt='profile' className='profile-picture' />
    </Container>
  );
};

export default Home;
