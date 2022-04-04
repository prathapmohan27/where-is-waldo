import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

test('renders header component', () => {
  render(<Header sec={22} mins={1} />);
  expect(screen.getByText(/where is waldo ?/i)).toBeInTheDocument();
  expect(screen.getByText(/ waldo/i)).toBeInTheDocument();
  expect(screen.getByText('01:22')).toBeInTheDocument();
});
