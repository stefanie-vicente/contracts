import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../store';

import { render, screen } from '@testing-library/react';

import Customers from './Customers';

test('renders customers page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Customers />
      </MemoryRouter>
    </Provider>
  );

  expect(
    screen.getByRole('heading', { name: /customers/i })
  ).toBeInTheDocument();
});
