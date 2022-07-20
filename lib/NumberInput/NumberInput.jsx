import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { generateClasses } from '../utils';

function NumberInput(props) {
  const { classNames, onChange, value, elementId } = props;

  return (
    <fieldset
      className={clsx(
        generateClasses(
          'flex border border-gray-300 w-min overflow-hidden h-8',
          classNames?.field?.root,
        ),
      )}
    >
      <button
        className={clsx(
          generateClasses(
            'px-1 text-slate-300 hover:text-black hover:bg-slate-100 focus:bg-slate-300 focus:text-black w-8',
            classNames?.field?.minus,
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
          ),
        )}
      />
      <button
        className={clsx(
          generateClasses(
            'px-1 text-slate-300 hover:text-black hover:bg-slate-100 focus:bg-slate-300 focus:text-black w-8',
            classNames?.field?.plus,
          ),
        )}
        onClick={() => onChange(elementId, value + 1)}
      >
        +
      </button>
    </fieldset>
  );
}

NumberInput.propTypes = {
  /**
   * object of classNames to add to each part of the component.

   * e.g. `{ root: 'p-2', productTitle: 'text-xl', removeButtonIcon: ['w-10', 'h-10'] }`
   */
  classNames: PropTypes.shape({
    root: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    minus: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    plus: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    input: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /**
   * Quantity value
   */
  value: PropTypes.number,
  /**
   * onChange handler for quantity
   * @param {string} id
   * @param {number} quantity
   */
  onChange: PropTypes.func,
  /**
   * Unique DOM element identifier
   */
  elementId: PropTypes.string,
};

NumberInput.defaultProps = {
  onChange: (id, quantity) => ({ id, quantity }),
  value: 0,
  elementId: 'test',
};

export default NumberInput;
