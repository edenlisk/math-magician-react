import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/pages/Home/Home';
import Quote from '../components/pages/Quote/Quote';

describe('Test different components', () => {
  test('It should render Home', () => {
    render(<Home />);
    const author = screen.getByTestId('welcome');
    expect(author).toHaveTextContent('Welcome to our page');
  });
});

describe('Test different components', () => {
  test('It should render Quote component', () => {
    render(<Quote />);
    expect(screen.getByText(/William Paul Thurston/)).toBeInTheDocument();
  });
});
