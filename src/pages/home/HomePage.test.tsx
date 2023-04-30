import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders home page', () => {
  render(<HomePage />);
  
  expect(
    screen.getByRole('heading', { name: /the contract automation plataform/i })
  ).toBeInTheDocument();
});
