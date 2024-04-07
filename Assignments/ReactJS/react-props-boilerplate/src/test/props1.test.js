import { render, screen } from '@testing-library/react';
import React from 'react';
import CommonComponent from '../components/CommonComponent'

test('renders learn react link', () => {
  render(<CommonComponent text="This is a Common Content"/>);
  const linkElement = screen.getByText(/Common Content/i);
  expect(linkElement).toBeInTheDocument();
});
