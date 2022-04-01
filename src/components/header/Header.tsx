import { useEffect, useState } from 'react';

import { NavBar, ImgContainer, Timer, Img, Figure } from './HeaderStyle';
import lois from '../assets/lois.png';
import ferb from '../assets/ferb.png';
import waldo from '../assets/waldo.png';

interface propsInterface {
  isTimer: boolean;
}

const Header = ({ isTimer }: propsInterface) => {
  const [sec, setSec] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);

  useEffect(() => {
    let timer;
    if (isTimer) {
      timer = setInterval(() => {
        setSec((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
  }, [isTimer]);

  useEffect(() => {
    if (sec === 60) {
      setMins((prevMins) => prevMins + 1);
      setSec(0);
    }
  }, [mins, sec]);

  return (
    <NavBar>
      <h1>Find Us!</h1>
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
