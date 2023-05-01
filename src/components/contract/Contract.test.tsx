import React from 'react';

import { render, screen } from '@testing-library/react';

import Contract from './Contract';

const contract = {
  id: 0,
  name: 'Contract #0',
  customerId: 0,
  content:
    'Morbi rhoncus suscipit tortor facilisis semper. Suspendisse sodales accumsan fringilla.',
};

test('renders contract card', () => {
  render(<Contract {...contract} />);

  expect(screen.getByText(/contract #0/i)).toBeInTheDocument()
});
