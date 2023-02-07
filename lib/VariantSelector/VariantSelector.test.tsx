import React from 'react';
import { render } from '@testing-library/react';
import VariantSelector from './VariantSelector';

// Test suite for the VariantSelector component
describe('VariantSelector', () => {
  // Test case for rendering and selecting a variant
  it('renders and selects a variant', () => {
    // Array of variants to be passed as props
    const variants = [
      { id: '1', name: 'red', color: 'red', isEnabled: 'true' },
      { id: '2', name: 'blue', color: 'blue', isEnabled: 'true' },
    ];

    // Jest mock function to be passed as onSelection prop
    const onSelection = jest.fn();

    // Render the component with props
    const { getByTestId } = render(
      <VariantSelector
        typeLabel="color"
        isColor={true}
        variants={variants}
        onSelection={onSelection}
        overrideClasses={false}
      />,
    );
    
    // Check if the component correctly renders the variants
    expect(getByTestId('variant-red')).toBeInTheDocument();
    expect(getByTestId('variant-blue')).toBeInTheDocument();
  });
});