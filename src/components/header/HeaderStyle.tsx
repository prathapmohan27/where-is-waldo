import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavBar = styled(Flex)`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2d38;
  padding: 0 1rem;
  color: white;
  z-index: 1;
`;

export const ImgContainer = styled(Flex)`
  padding: 0.5rem;
`;

export const Figure = styled.figure`
  text-align: center;
  margin-right: 0.2rem;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  object-fit: contain;
`;

export const LeaderButton = styled.button`
  padding: 0.3rem 1rem;
  outline: none;
  font-weight: 800;
  font-size: 1.5rem;
  background-color: #06c3d4;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;
