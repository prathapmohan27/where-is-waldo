import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import GameBoard from './components/gameBoard/GameBoard';
import Start from './components/start/Start';
import Mag from './components/mag/Mag';

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
  const getResult = (str: string): void => {
    setResult(str);
    setTimeout(() => {
      setResult('');
    }, 1500);
  };
  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Start />
      <Header />
      <Mag str={result} />
      <GameBoard getResult={getResult} />
    </div>
  );
}

export default App;
