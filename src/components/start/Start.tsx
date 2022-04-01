import { useState } from 'react';
import { Div, Main, StartButton } from './StartStyle';

interface propsInterface {
  startTimer(): void;
}

const Start = ({ startTimer }: propsInterface) => {
  let [visible, setVisible] = useState<boolean>(true);
  const handleStart = (): void => {
    setVisible(false);
  };
  const handleClick = (): void => {
    handleStart();
    startTimer();
  };
  return (
    <Div show={visible}>
      <Main>
        <h1>Welcome</h1>
        <p>You will be timed when you click start</p>
        <p>Tag characters as fast as you can!</p>
        <StartButton onClick={handleClick}>START</StartButton>
      </Main>
    </Div>
  );
};

export default Start;
