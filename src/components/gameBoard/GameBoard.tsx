import map from '../assets/map.jpg';
import { Img } from './GameBoardStyle';

const GameBoard = () => {
  return (
    <main>
      <Img src={map} alt="map" />
    </main>
  );
};

export default GameBoard;
