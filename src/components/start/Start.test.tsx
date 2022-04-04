import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Start from './Start';

test('renders start component', () => {
  const startTimer = jest.fn();
  render(<Start startTimer={startTimer} />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  const button = screen.getByText('START');
  userEvent.click(button);
  expect(startTimer).toHaveBeenCalledTimes(1);
});
