import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';
//dummy
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personal Info/i);
  expect(linkElement).toBeInTheDocument();
});
