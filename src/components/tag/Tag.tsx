import React from 'react';
import { Ul } from './TagStyle';

const Tag = ({ coordinate, handleTag }: any) => {
  return (
    <Ul left={coordinate.x} top={coordinate.y}>
      <div></div>
      <li>Lois</li>
      <li>Ferb</li>
      <li onClick={handleTag}>Waldo</li>
    </Ul>
  );
};

export default Tag;
