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
  const [discovered, setDiscovered] = useState<String[]>(['aaa', 'bbb']);
  const [sec, setSec] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);

  useEffect(() => {
    if (discovered.length === 3) {
      setIsTimer(false);
      setTimeout(() => {
        setShowLeaderBoard(true);
      }, 1000);
    }
  }, [discovered]);

  const getResult = (str: string): void => {
    setResult(str);
    setTimeout(() => {
      setResult('');
    }, 1500);
  };

  const startTimer = (): void => {
    setIsTimer(true);
  };

  const getDiscoveredChar = (char: string): void => {
    setDiscovered([...discovered, char]);
  };

  const getTime = (sec: number, mins: number): void => {
    setSec(sec);
    setMins(mins);
  };

  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Start startTimer={startTimer} />
      <Header isTimer={isTimer} getTime={getTime} />
      <Mag str={result} />
      <GameBoard getDiscoveredChar={getDiscoveredChar} getResult={getResult} />
      <LeaderBoar show={showLeaderBoard} sec={sec} mins={mins} />
    </div>
  );
}

export default App;
