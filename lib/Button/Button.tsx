import React from 'react';
import clsx from 'clsx';
import { generateClasses } from '../utils';

interface ClassNames {
  button?: string;
}
interface Props {
  classNames?: ClassNames;
  disabled: boolean;
  displayText: string;
  onClick: () => {};
  overrideClasses?: boolean;
}
const Button: React.FC<Props> = ({
  classNames,
  disabled,
  displayText,
  onClick,
  overrideClasses,
}) => (
  <button
    className={clsx([
      generateClasses(
        'py-xs px-sm text-basefont-medium bg-primary text-white w-full hover:bg-primary-dark',
        classNames?.button,
        overrideClasses,
      ),
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
