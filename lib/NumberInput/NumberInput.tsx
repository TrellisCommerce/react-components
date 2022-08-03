import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { generateClasses } from '../utils';
import { Field } from '../utils/types';

interface ClassNames {
  field?: Field;
}

interface Props {
  classNames?: ClassNames;
  onChange: (elementId: string, value: number | string) => {};
  value: number;
  elementId: string;
  overrideClasses?: boolean;
}

const NumberInput: React.FC<Props> = (props) => {
  const { classNames, onChange, value, elementId, overrideClasses } = props;

  return (
    <fieldset
      className={clsx(
        generateClasses(
          'flex border border-gray-300 w-min overflow-hidden h-8',
          classNames?.field?.root,
          overrideClasses,
        ),
      )}
    >
      <button
        className={clsx(
          generateClasses(
            'px-1 text-slate-300 hover:text-black hover:bg-slate-100 focus:bg-slate-300 focus:text-black w-8',
            classNames?.field?.minus,
            overrideClasses,
          ),
        )}
        onClick={() => value > 1 && onChange(elementId, value - 1)}
      >
        -
      </button>
      <input
        id={`qty-${elementId}`}
        type="text"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => onChange(elementId, e.target.value)}
        min="1"
        className={clsx(
          generateClasses(
            'w-8 text-center border-gray-300 border-x',
            classNames?.field?.input,
            overrideClasses,
          ),
        )}
      />
      <button
        className={clsx(
          generateClasses(
            'px-1 text-slate-300 hover:text-black hover:bg-slate-100 focus:bg-slate-300 focus:text-black w-8',
            classNames?.field?.plus,
            overrideClasses,
          ),
        )}
        onClick={() => onChange(elementId, value + 1)}
      >
        +
      </button>
    </fieldset>
  );
};

NumberInput.defaultProps = {
  onChange: (id, quantity) => ({ id, quantity }),
  value: 0,
  elementId: 'test',
};

export default NumberInput;
