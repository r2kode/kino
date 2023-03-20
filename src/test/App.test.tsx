import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../pages/App';

test.skip('App', () => {
  render(<App />);
  expect(screen.getByText(/kino/i)).toBeInTheDocument();
});
