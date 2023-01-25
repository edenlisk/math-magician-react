import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Home from '../components/pages/Home/Home';
import '@testing-library/jest-dom';

describe('Test components', () => {
  test('It should render Home', () => {
    render(<Home />);
    const author = screen.getByTestId('welcome');
    expect(author).toHaveTextContent('Welcome to our page');
  });

  test('It should render correctly', () => {
    const tree = TestRenderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
