import { useState } from 'react';
import map from '../assets/map.jpg';
import Tag from '../tag/Tag';
import { Img, Div } from './GameBoardStyle';

interface coordinateInterface {
  x: Number;
  y: Number;
}
const GameBoard = ({ getResult }: any) => {
  const [coordinate, setCoordinate] = useState<coordinateInterface>({
    x: 0,
    y: 0,
  });
  const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
    const x = Math.round(e.nativeEvent.offsetX) - 15;
    const y = Math.round(e.nativeEvent.offsetY) - 15;
    setCoordinate({ x, y });
  };

  const handleTag = (e: React.MouseEvent<HTMLLIElement>) => {
    const { x, y } = coordinate;
    if (x >= 1000 && y >= 520) {
      if (x <= 1040 && y <= 610) {
        getResult(`You Found ${e.currentTarget.innerHTML}`);
        setCoordinate({ x: 0, y: 0 });
      } else {
        getResult(`That's Not ${e.currentTarget.innerHTML}`);
        setCoordinate({ x: 0, y: 0 });
      }
    } else {
      getResult(`That's Not ${e.currentTarget.innerHTML}`);
      setCoordinate({ x: 0, y: 0 });
    }
  };

  console.log(coordinate);
  return (
    <Div>
      <Img onClick={getCoordinates} src={map} alt="map" />
      <Tag coordinate={coordinate} handleTag={handleTag} />
    </Div>
  );
};

export default GameBoard;
