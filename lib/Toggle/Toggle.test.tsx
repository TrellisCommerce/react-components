import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggle from './Toggle';

describe('Toggle', () => {
  it('renders with default styles', () => {
    const { container } = render(<Toggle label="Toggle" overrideDefaults={false} />);
    expect(container).toMatchSnapshot();
  });

  it('renders with custom styles', () => {
    const customStyles = {
      switch: 'relative inline-flex items-center h-6 rounded-full w-10 custom',
      switchEnabled: 'bg-green-600',
      switchDisabled: 'bg-gray-200 custom-disabled',
      label: 'inline-block w-4 h-4 transform bg-white rounded-full custom',
      labelEnabled: 'translate-x-5',
      labelDisabled: 'translate-x-1 custom-disabled',
    };

    const { container } = render(
      <Toggle label="Toggle" classNames={customStyles} overrideDefaults />
    );
    expect(container).toMatchSnapshot();
  });

  it('toggles the switch', () => {
    const { container } = render(<Toggle label="Toggle" overrideDefaults={false} />);
    const switchElement = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(switchElement!);
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });
});
