import calculate from '../logic/calculate';

describe('Testing Keypad functionality', () => {
  test('Test clear Button (AC)', () => {
    const container = { total: 10, next: 30, operation: '-' };
    const solution = calculate(container, 'AC');
    expect(solution).toEqual({ total: null, next: null, operation: null });
  });

  test('Test inverse sign (+/-)', () => {
    const container = { total: 70, next: null, operation: null };
    const solution = calculate(container, '+/-');
    expect(solution).toEqual({ total: '-70', next: null, operation: null });
  });

  test('Test equal sign (=)', () => {
    const container = { total: 10, next: null, operation: null };
    const solution = calculate(container, '=');
    expect(solution).toEqual({});
  });

  test('Test Zero button (0)', () => {
    const container = { total: 7, next: 80, operation: null };
    const solution = calculate(container, '0');
    expect(solution).toEqual({ total: null, next: '800' });
  });
});
