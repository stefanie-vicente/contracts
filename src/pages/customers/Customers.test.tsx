import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Customers from './Customers';

test('renders customers page', () => {
  render(
    <MemoryRouter>
      <Customers />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: /customers/i })
  ).toBeInTheDocument();
});
