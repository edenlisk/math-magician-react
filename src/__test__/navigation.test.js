import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Navbar from '../components/navigation/Navbar';
import '@testing-library/jest-dom';

describe('Test navigation bar', () => {
  test('Test Navbar', () => {
    render(<Navbar />);
    expect(screen.getByTestId('header')).toHaveTextContent('Math Magician!');
  });

  test('It should render Navbar correctly', () => {
    const tree = TestRenderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
