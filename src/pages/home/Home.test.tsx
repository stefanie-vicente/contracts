import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders home page', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: /the contract automation plataform/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /contracts/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /customers/i })
  ).toBeInTheDocument();
});
