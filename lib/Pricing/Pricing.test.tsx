import React from 'react';
import { render } from '@testing-library/react';
import Pricing from './Pricing';

describe('Pricing component', () => {
  it('renders original price correctly', () => {
    const { getByText } = render(
      <Pricing originalPrice="$100" promotionalPrice={null} />
    );
    const originalPrice = getByText('$100');
    expect(originalPrice).toBeInTheDocument();
    expect(originalPrice).toHaveClass('text-md', 'font-medium');
  });

  it('renders promotional price correctly', () => {
    const { getByText } = render(
      <Pricing originalPrice="$100" promotionalPrice="$80" />
    );
    const promotionalPrice = getByText('$80');
    expect(promotionalPrice).toBeInTheDocument();
    expect(promotionalPrice).toHaveClass('text-md', 'font-medium');

    const originalPrice = getByText('$100');
    expect(originalPrice).toBeInTheDocument();
    expect(originalPrice).toHaveClass('line-through', 'opacity-50', 'text-sm');
  });

  it('does not render price if originalPrice is not provided', () => {
    const { queryByText } = render(<Pricing originalPrice={null} promotionalPrice={null} />);
    const originalPrice = queryByText('$100');
    expect(originalPrice).toBeNull();
  });

});