import { useState } from 'react';
import map from '../assets/map.jpg';
import Tag from '../tag/Tag';
import { Img } from './GameBoardStyle';

interface coordinateInterface {
  x: Number;
  y: Number;
}
const GameBoard = () => {
  const [coordinate, setCoordinate] = useState<coordinateInterface>({
    x: 0,
    y: 0,
  });
  const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
    const x = Math.round(e.nativeEvent.offsetX);
    const y = Math.round(e.nativeEvent.offsetY);
    setCoordinate({ x, y });
  };
  console.log(coordinate);
  return (
    <main style={{ position: 'relative' }}>
      <Img onClick={getCoordinates} src={map} alt="map" />
      <Tag coordinate={coordinate} />
    </main>
  );
};

export default GameBoard;
