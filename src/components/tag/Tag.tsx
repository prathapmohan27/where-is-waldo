import React from 'react';
import { Ul, Li } from './TagStyle';

interface propsInterface {
  coordinate: {
    x: Number;
    y: Number;
  };
  handleTag(e: React.MouseEvent<HTMLLIElement>): void;
  char: {
    Lois: boolean;
    Ferb: boolean;
    Waldo: boolean;
  };
}

const Tag = ({ coordinate, handleTag, char }: propsInterface) => {
  return (
    <Ul left={coordinate.x} top={coordinate.y}>
      <div></div>
      <Li disable={char.Lois} onClick={handleTag}>
        Lois
      </Li>
      <Li disable={char.Ferb} onClick={handleTag}>
        Ferb
      </Li>
      <Li disable={char.Waldo} onClick={handleTag}>
        Waldo
      </Li>
    </Ul>
  );
};

export default Tag;
