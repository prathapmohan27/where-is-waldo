import { useEffect, useState } from 'react';

import { NavBar, ImgContainer, Timer, Img, Figure } from './HeaderStyle';
import lois from '../assets/lois.png';
import ferb from '../assets/ferb.png';
import waldo from '../assets/waldo.png';

interface propsInterface {
  isTimer: boolean;
  getTime(sec: number, mins: number): void;
}

const Header = ({ isTimer, getTime }: propsInterface) => {
  const [sec, setSec] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);

  useEffect(() => {
    if (!isTimer) {
      getTime(sec, mins);
      return;
    }
    const timer = setInterval(() => {
      setSec((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
