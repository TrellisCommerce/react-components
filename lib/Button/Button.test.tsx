import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render the correct text', () => {
    const { getByText } = render(
      <Button displayText="Click me" onClick={() => {}} disabled={false} />,
    );

    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Button displayText="Click me" onClick={onClick} disabled={false} />,
    );

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick when disabled', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Button displayText="Click me" onClick={onClick} disabled={true} />,
    );

    const button = getByText('Click me');

    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should apply classNames when provided', () => {
    const { getByText } = render(
      <Button
        displayText="Click me"
        onClick={() => {}}
        disabled={false}
        classNames={{ button: 'my-custom-class' }}
        overrideClasses={true}
      />,
    );

    const button = getByText('Click me');

    expect(button).toHaveClass('my-custom-class');
  });
});
