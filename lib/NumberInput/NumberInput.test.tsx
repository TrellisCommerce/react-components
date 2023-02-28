import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NumberInput from './NumberInput';

let onChange: any;
const elementId = 'test';
const value = 2;
beforeEach(() => {
  onChange = jest.fn();
});
afterEach(cleanup);

test('should render the number input', () => {
  const { getByTestId } = render(
    <NumberInput
      elementId={elementId}
      value={value}
      onChange={onChange}
    />
  );

  const input = getByTestId(`qty-${elementId}`);

  expect(input).toBeInTheDocument();
});

test('should decrease the value on minus button click', () => {
  const { getByText } = render(
    <NumberInput
      elementId={elementId}
      value={value}
      onChange={onChange}
    />
  );

  const minusButton = getByText('-');
  fireEvent.click(minusButton);

  expect(onChange).toHaveBeenCalledWith(elementId, 1);
});

test('should increase the value on plus button click', () => {
  const { getByText } = render(
    <NumberInput
      elementId={elementId}
      value={value}
      onChange={onChange}
    />
  );

  const plusButton = getByText('+');
  fireEvent.click(plusButton);

  expect(onChange).toHaveBeenCalledWith(elementId, 3);
});