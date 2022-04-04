import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import LeaderBoar from './LeaderBoar';
import List from './List';

test('renders leader board component', () => {
  render(<LeaderBoar show={true} sec={22} mins={12} />);
  expect(screen.getByText(/leader board/i)).toBeInTheDocument();
  expect(screen.getByText('12:22')).toBeInTheDocument();
});

test('check leaderBoard form element', () => {
  render(<LeaderBoar show={true} sec={22} mins={12} />);
  userEvent.type(screen.getByRole('textbox'), 'hello');
  const button = screen.getByText('SAVE');
  userEvent.click(button);
  expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
});

test('render list component', () => {
  const obj = {
    name: 'luffy',
    mins: 2,
    sec: 22,
  };
  render(<List obj={obj} i={1} />);
  expect(screen.getByText(/luffy/i)).toBeInTheDocument();
});
