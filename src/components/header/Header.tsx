import { NavBar, ImgContainer, Timer, Img, Figure } from './HeaderStyle';
import lois from '../assets/lois.png';
import ferb from '../assets/ferb.png';
import waldo from '../assets/waldo.png';

interface propsInterface {
  sec: number;
  mins: number;
}

const Header = ({ sec, mins }: propsInterface) => {
  return (
    <NavBar>
      <h1>where is waldo ?</h1>
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
      <Timer>
        <h1>
          {String(mins).padStart(2, '0')}:{String(sec).padStart(2, '0')}
        </h1>
      </Timer>
    </NavBar>
  );
};

export default Header;
