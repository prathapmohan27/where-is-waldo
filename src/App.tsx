import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import GameBoard from './components/gameBoard/GameBoard';
import Start from './components/start/Start';
import Mag from './components/mag/Mag';
import LeaderBoar from './components/leaderBoar/LeaderBoar';

const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
body{
  background-color: #474e6b;
  
}
`;

function App() {
  const [result, setResult] = useState<String>('');
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [isDiscovered, setIsDiscovered] = useState<boolean>(false);
  const [sec, setSec] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);

  useEffect(() => {
    if (!isTimer) {
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

  useEffect(() => {
    if (isDiscovered) {
      setIsTimer(false);
      setTimeout(() => {
        setShowLeaderBoard(true);
      }, 1000);
    }
  }, [isDiscovered]);

  const getResult = (str: string): void => {
    setResult(str);
    setTimeout(() => {
      setResult('');
    }, 1500);
  };

  const startTimer = (): void => {
    setIsTimer(true);
  };

  const getDiscoveredChar = (isDiscover: boolean): void => {
    setIsDiscovered(isDiscover);
  };

  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Start startTimer={startTimer} />
      <Header sec={sec} mins={mins} />
      <Mag str={result} />
      <GameBoard getDiscoveredChar={getDiscoveredChar} getResult={getResult} />
      <LeaderBoar show={showLeaderBoard} sec={sec} mins={mins} />
    </div>
  );
}

export default App;
