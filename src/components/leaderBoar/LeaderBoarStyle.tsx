import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  padding: 1rem;
  border-radius: 0.4rem;
  color: white;
  border-radius: 0.3rem;
`;

export const ListContainer = styled.ul`
  width: 20rem;
  height: 15rem;
  padding: 1rem;
  overflow: auto;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  li {
    padding: 0.8rem;
    margin-bottom: 0.3rem;
    width: 90%;
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: 0 0 0.5rem black;
    border-radius: 0.3rem;
  }
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #0b0444;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }
`;

interface hideInterface {
  hide: boolean;
}

export const Form = styled.form<hideInterface>`
  margin: 1rem;
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  input {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    outline: none;
    border-radius: 0.3rem;
    border: none;
  }
  button {
    font-size: 1.2rem;
    background-color: #33c45f;
    border-radius: 0.3rem;
    cursor: pointer;
    font-weight: 800;
    outline: none;
    border: none;
    letter-spacing: 0.2rem;
    padding: 0.5rem 1.5rem;
  }
`;

export const Greeting = styled.h1<hideInterface>`
  display: ${(props) => (props.hide ? 'block' : 'none')};
`;
