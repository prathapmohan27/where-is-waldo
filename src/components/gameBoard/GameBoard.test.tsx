import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import GameBoard from './GameBoard';

test('render game board component', () => {
  const getDiscoveredChar = jest.fn();
  const getResult = jest.fn();
  render(
    <GameBoard getDiscoveredChar={getDiscoveredChar} getResult={getResult} />
  );
  const img = screen.getByAltText(/map/i);
  expect(img).toBeInTheDocument();
  userEvent.click(img);
  expect(screen.getByText(/lois/i)).toBeInTheDocument();
});
