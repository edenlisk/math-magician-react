import operate from '../logic/operate';
import calculate from '../logic/calculate';

describe('Test different math operations', () => {
  test('Test multiplication', () => {
    const operands = { numberOne: 2, numberTwo: 10, operation: 'x' };
    const result = operate(operands.numberOne, operands.numberTwo, operands.operation);
    expect(Number(result)).toBe(20);
  });

  test('Test Addition', () => {
    const operands = { numberOne: 10, numberTwo: 10, operation: '+' };
    const result = operate(operands.numberOne, operands.numberTwo, operands.operation);
    expect(Number(result)).toBe(20);
  });
  test('Test Subtraction', () => {
    const operands = { numberOne: 40, numberTwo: 5, operation: '-' };
    const result = operate(operands.numberOne, operands.numberTwo, operands.operation);
    expect(Number(result)).toBe(35);
  });

  test('Test Division', () => {
    const operands = { numberOne: 9, numberTwo: 3, operation: '÷' };
    const result = operate(operands.numberOne, operands.numberTwo, operands.operation);
    expect(Number(result)).toBe(3);
  });
});
