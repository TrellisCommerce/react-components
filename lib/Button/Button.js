import React from 'react';
import classnames from 'classnames';

const Button = ({ classNames, disabled, displayText, onClick }) => (
  <button
    className={classnames([
      'py-xs',
      'px-sm',
      'text-base',
      'font-medium',
      'bg-primary',
      'text-white',
      'w-full',
      'hover:bg-primary-dark',
      classNames?.button,
      {
        'bg-gray-500': disabled,
        'hover:bg-gray-600': disabled,
      },
    ])}
    disabled={disabled}
    type="button"
    onClick={() => {
      if (!disabled) {
        onClick();
      }
    }}
  >
    {displayText}
  </button>
);

export default Button;
