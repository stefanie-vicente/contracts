import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../store';

import { render, screen } from '@testing-library/react';

import Contracts from './Contracts';

test('renders contracts page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Contracts />
      </MemoryRouter>
    </Provider>
  );

  expect(
    screen.getByRole('heading', { name: /contracts/i })
  ).toBeInTheDocument();
});
