import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Customer from './Customer';

const customer = {
  id: 1,
  name: 'Pandora',
  contracts: [
    {
      id: 0,
      name: 'Contract #0',
      customerId: 0,
      content:
        'Morbi rhoncus suscipit tortor facilisis semper. Suspendisse sodales accumsan fringilla.',
    },
  ],
};

test('renders customer card', () => {
  render(<Customer customer={customer} deleteCustomer={() => {}} />);

  expect(screen.getByText(/pandora/i)).toBeInTheDocument();
});

test('renders one contract list', () => {
  render(<Customer customer={customer} deleteCustomer={() => {}} />);

  const contract = screen.getAllByRole('listitem');
  expect(contract).toHaveLength(1);
});

test('renders delete button', () => {
  const onClickDelete = jest.fn();
  render(<Customer customer={customer} deleteCustomer={onClickDelete} />);

  const button = screen.getByRole('button', { name: /delete/i });
  fireEvent.click(button);

  expect(onClickDelete).toBeCalled();
});
