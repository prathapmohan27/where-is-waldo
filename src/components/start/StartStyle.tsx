import styled from 'styled-components';

interface overlay {
  show: boolean;
}
export const Div = styled.div`
  display: ${(props: overlay) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const Main = styled.main`
  width: 40rem;
  height: 15rem;
  text-align: center;
  padding: 2rem;
  background-image: linear-gradient(#4c4d69, #03078a);
  color: white;
  border-radius: 0.5rem;
  h1 {
    font-size: 2.5rem;
    margin: 1rem;
  }
  p {
    font-weight: 800;
    font-size: 1.3rem;
  }
`;

export const StartButton = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  letter-spacing: 0.3rem;
  margin-top: 1rem;
  font-weight: 800;
  font-size: 2rem;
  background-color: black;
  color: white;
`;
