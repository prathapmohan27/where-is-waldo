/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import map from '../assets/map.jpg';
import Tag from '../tag/Tag';
import { Img, Div } from './GameBoardStyle';

interface coordinateInterface {
  x: Number;
  y: Number;
}
interface propsInterface {
  getDiscoveredChar(isDiscover: boolean): void;
  getResult(str: String): void;
}

const GameBoard = ({ getDiscoveredChar, getResult }: propsInterface) => {
  const [coordinate, setCoordinate] = useState<coordinateInterface>({
    x: 0,
    y: 0,
  });
  const [char, setChar] = useState({
    Lois: false,
    Ferb: false,
    Waldo: false,
  });
  const [charName, setCharName] = useState<string>('');
  const [isFind, setIsfind] = useState<boolean>(false);

  useEffect(() => {
    if (Object.values(char).every((char) => char)) {
      getDiscoveredChar(true);
    }
  }, [char]);

  useEffect(() => {
    if (isFind) {
      getResult(`You Found ${charName}`);
      UpdateDiscoveredChar({ [charName]: 'true' });
    } else {
      if (charName) {
        getResult(`That's Not ${charName}`);
      }
    }
    setCoordinate({ x: 0, y: 0 });
  }, [isFind, charName]);

  const UpdateDiscoveredChar = (obj: any): void => {
    setChar({ ...char, ...obj });
  };

  const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
    const x = Math.round(e.nativeEvent.offsetX) - 15;
    const y = Math.round(e.nativeEvent.offsetY) - 15;
    setCoordinate({ x, y });
  };

  const handleTag = (e: React.MouseEvent<HTMLLIElement>) => {
    setCharName(e.currentTarget.innerHTML);
    const { x, y } = coordinate;
    if (x >= 1000 && y >= 520) {
      if (x <= 1040 && y <= 610) {
        setIsfind(true);
      }
    } else {
      setIsfind(false);
    }
  };

  return (
    <Div>
      <Img onClick={getCoordinates} src={map} alt="map" />
      <Tag char={char} coordinate={coordinate} handleTag={handleTag} />
    </Div>
  );
};

export default GameBoard;
