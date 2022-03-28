import { useState } from 'react';
import { Div, Main, StartButton } from './StartStyle';

const Start = () => {
  let [visible, setVisible] = useState<boolean>(true);
  const handleStart = (): void => {
    setVisible(false);
  };
  return (
    <Div show={visible}>
      <Main>
        <h1>Welcome</h1>
        <p>You will be timed when you click start</p>
        <p>Tag characters as fast as you can!</p>
        <StartButton onClick={handleStart}>START</StartButton>
      </Main>
    </Div>
  );
};

export default Start;
