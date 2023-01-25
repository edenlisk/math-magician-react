import TestRenderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Test Calculator', () => {
  test('It should render Calculator component correctly', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});