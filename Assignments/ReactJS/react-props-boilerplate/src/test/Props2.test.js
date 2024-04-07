import { render, screen } from '@testing-library/react';
import React from 'react';
import BodyContentComponent from '../components/BodyContentComponent';

test('renders learn react link', () => {
  render(<BodyContentComponent content="This is Body content Component"/>);
  const linkElement = screen.getByText(/Body content Component/i);
  expect(linkElement).toBeInTheDocument();
});
