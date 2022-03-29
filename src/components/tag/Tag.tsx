import { Ul } from './TagStyle';

const Tag = ({ coordinate }: any) => {
  return (
    <Ul left={coordinate.x} top={coordinate.y}>
      <li>Lois</li>
      <li>Ferb</li>
      <li>Waldo</li>
    </Ul>
  );
};

export default Tag;
