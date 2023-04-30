import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Contracts from './Contracts';

test('renders contracts page', () => {
  render(
    <MemoryRouter>
      <Contracts />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: /contracts/i })
  ).toBeInTheDocument();
});
