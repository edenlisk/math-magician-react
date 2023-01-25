import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import Quote from '../components/pages/Quote/Quote';

describe('Test Quote components', () => {
  test('It should render Quote component', () => {
    render(<Quote />);
    expect(screen.getByText(/William Paul Thurston/)).toBeInTheDocument();
  });

  test('It should render correctly', () => {
    const tree = TestRenderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
