import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders pages links', () => {
 render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByRole('link', {name: /contracts/i})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: /customers/i})).toBeInTheDocument();
});
