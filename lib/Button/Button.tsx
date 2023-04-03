import React from 'react';
import clsx from 'clsx';
import { generateClasses } from '../utils';
import Loading from "./Loading";

interface ClassNames {
  button?: string;
}
interface Props {
  classNames?: ClassNames;
  disabled: boolean;
  displayText: string;
  onClick: () => void;
  overrideClasses?: boolean;
  isLoading?: boolean;
  LoadingIndicator?: React.FC;
}
const Button: React.FC<Props> = ({
  classNames,
  disabled,
  displayText,
  onClick,
  overrideClasses,
  isLoading = false,
                                   LoadingIndicator
}) => (
  <button
    className={clsx([
      generateClasses(
        'py-xs px-sm text-basefont-medium bg-primary text-white w-full hover:bg-primary-dark flex justify-center item-center',
        classNames?.button,
        overrideClasses,
      ),
      {
        'bg-gray-500': disabled,
        'hover:bg-gray-600': disabled || isLoading
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
    {isLoading ?
    <Loading/>:
      <span className="items-center">{displayText}</span>}
  </button>
);

export default Button;
