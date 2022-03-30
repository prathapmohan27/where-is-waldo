import styled from 'styled-components';

interface MagInterface {
  str: string;
}

const Result = styled.div<MagInterface>`
  position: absolute;
  text-align: center;
  color: #e4dfd6;
  background-color: rgba(0, 0, 0, 0.6);
  border: 0.3rem;
  z-index: ${(props) => (props.str ? '1' : '-1')};
  font-size: 1.5rem;
  font-weight: 800;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  left: 50rem;
`;

const Mag = ({ str }: any) => {
  return <Result str={str}>{str}</Result>;
};

export default Mag;
