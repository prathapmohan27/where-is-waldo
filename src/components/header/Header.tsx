import { NavBar, ImgContainer, Img, LeaderButton, Figure } from './HeaderStyle';
import lois from '../assets/lois.jpg';
import ferb from '../assets/ferb.png';
import waldo from '../assets/waldo.png';
const Header = () => {
  return (
    <NavBar>
      <h1>Where is Waldo?</h1>
      <ImgContainer>
        <Figure>
          <Img src={lois} alt="lois" />
          <figcaption>Lois</figcaption>
        </Figure>
        <Figure>
          <Img src={ferb} alt="ferb" />
          <figcaption>Ferb</figcaption>
        </Figure>
        <Figure>
          <Img src={waldo} alt="waldo" />
          <figcaption>Waldo</figcaption>
        </Figure>
      </ImgContainer>
      <div>
        <LeaderButton>Leader Bored</LeaderButton>
      </div>
    </NavBar>
  );
};

export default Header;
