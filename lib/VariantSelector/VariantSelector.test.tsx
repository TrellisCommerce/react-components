import React from 'react';
import { render } from '@testing-library/react';
import VariantSelector from './VariantSelector';

describe('VariantSelector', () => {
  it('renders and selects a variant', () => {
    const variants = [
      { id: '1', name: 'red', color: 'red', isEnabled: 'true' },
      { id: '2', name: 'blue', color: 'blue', isEnabled: 'true' },
    ];

    const onSelection = jest.fn();

    const { getByTestId } = render(
      <VariantSelector
        typeLabel="color"
        isColor={true}
        variants={variants}
        onSelection={onSelection}
        overrideClasses={false}
      />,
    );

    expect(getByTestId('variant-red')).toBeInTheDocument();
    expect(getByTestId('variant-blue')).toBeInTheDocument();
  });
});
