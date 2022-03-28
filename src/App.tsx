import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import GameBoard from './components/gameBoard/GameBoard';
import Start from './components/start/Start';

const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
`;

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Start />
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
