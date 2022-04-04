/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import map from '../assets/map.jpg';
import Tag from '../tag/Tag';
import { Img, Div } from './GameBoardStyle';
import { getCoordFirestore } from '../backend/backend';

interface coordinateInterface {
  x: Number;
  y: Number;
}

interface fetchCoordinateInterface {
  bottomX: number;
  bottomY: number;
  topX: Number;
  topY: Number;
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

  useEffect(() => {
    if (Object.values(char).every((char) => char)) {
      getDiscoveredChar(true);
    }
  }, [char]);

  const UpdateDiscoveredChar = (obj: any): void => {
    setChar({ ...char, ...obj });
  };

  const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
    const x = Math.round(e.nativeEvent.offsetX) - 15;
    const y = Math.round(e.nativeEvent.offsetY) - 15;
    setCoordinate({ x, y });
  };

  const handleTag = async (e: React.MouseEvent<HTMLLIElement>) => {
    const charName = e.currentTarget.innerHTML;
    const fetchCoord: fetchCoordinateInterface | any = await getCoordFirestore(
      charName
    );
    let { bottomX, bottomY, topX, topY } = fetchCoord;
    const { x, y } = coordinate;
    if (x >= topX && y >= topY) {
      if (x <= bottomX && y <= bottomY) {
        getResult(`You Found ${charName}`);
        UpdateDiscoveredChar({ [charName]: 'true' });
      } else {
        getResult(`That's Not ${charName}`);
      }
    } else {
      getResult(`That's Not ${charName}`);
    }
    setCoordinate({ x: 0, y: 0 });
  };

  return (
    <Div>
      <Img onClick={getCoordinates} src={map} alt="map" />
      <Tag char={char} coordinate={coordinate} handleTag={handleTag} />
    </Div>
  );
};

export default GameBoard;
