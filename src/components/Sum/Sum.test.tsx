import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sum from './Sum';
import calculateSum from './Sum';

describe('Test sum compoenent calculating and rendering the sum correctly', () => {
  // Check prescence of a text in a compoenent
  test('Sum calculated succesfully', () => {
    // Step 1: Arrange
    render(<Sum />);
    // Step 2: Act

    // Step 3: Assert
    const sumLabel = screen.getByText('Sum of the two number is :', { exact: false });
    expect(sumLabel).toBeInTheDocument();
  });

  // Simulate entering values in form and checking the result value display is correct
  it('When a and b is number sum should be equal to sum to two  numbers', () => {
    // Step 1: Arrange
    const sumComponent = render(<Sum />);
    // Step 2: Act : fill the input values by 23 and 4 and expect sum to be 7
    // get input boxes
    const inputNumber1 = sumComponent.getByLabelText('Number1');
    const inputNumber2 = sumComponent.getByLabelText('Number2');
    // fill the inputs by sample values
    fireEvent.change(inputNumber1, { target: { value: 23 } });
    fireEvent.change(inputNumber2, { target: { value: 34 } });
    // get the sum value
    // Step 3: Assert
    const outputSum = sumComponent.getByText('Sum of the two number is :', { exact: false });
    expect(outputSum).toHaveTextContent('57');
  });
});
