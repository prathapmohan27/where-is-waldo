import styled from 'styled-components';

interface coordinateInterface {
  left: Number;
  top: Number;
}
export const Ul = styled.div<coordinateInterface>`
  position: absolute;
  display: ${(props) => (props.left ? 'block' : 'none')};
  left: ${(props) => (props.left ? `${props.left}px` : '0')};
  top: ${(props) => (props.top ? `${props.top}px` : '0')};
  background-color: white;
  margin: 0;
  list-style: none;
  li {
    border: 0.1rem solid;
    padding: 0 0.5rem;
    cursor: pointer;
    font-weight: 800;
    background-color: #ded3d3;
  }
`;
