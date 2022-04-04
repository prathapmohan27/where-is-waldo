import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Tag from './Tag';

test('renders Tag component', () => {
  const coordinate = {
    x: 100,
    y: 80,
  };
  const char = {
    Lois: false,
    Ferb: false,
    Waldo: false,
  };
  const handleTag = jest.fn();
  render(<Tag coordinate={coordinate} handleTag={handleTag} char={char} />);
  expect(screen.getByText(/waldo/i)).toBeInTheDocument();
  userEvent.click(screen.getByText('Lois'));
  expect(handleTag).toHaveBeenCalledTimes(1);
});
