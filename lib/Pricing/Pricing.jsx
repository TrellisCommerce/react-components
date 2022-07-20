import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { generateClasses } from '../utils';

/**
 * Pricing component
 */
const Pricing = (props) => {
  const { classNames, originalPrice, promotionalPrice } = props;

  return (
    <div className="flex">
      {promotionalPrice && (
        <span
          className={clsx([
            generateClasses(
              'text-md font-medium mr-1',
              classNames?.promotional,
            ),
          ])}
        >
          {promotionalPrice}
        </span>
      )}
      <span
        className={clsx([
          promotionalPrice
            ? ['line-through', 'opacity-50', 'text-sm']
            : 'text-md font-medium',
          classNames?.original,
        ])}
      >
        {originalPrice}
      </span>
    </div>
  );
};

Pricing.propTypes = {
  /**
	 * object of classNames to be added to each part of the component.
	 
	 * e.g. `{ original: 'my-custom-class', promotional: ['my-custom-class', 'my-other-custom-class'] }`
	 */
  classNames: PropTypes.shape({
    original: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    promotional: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /**
   * The original display price including currency.
   */
  originalPrice: PropTypes.string.isRequired,
  /**
	 * The promotional display price including currency.
	 
	 * If provided original price will be struck-through.
	 */
  promotionalPrice: PropTypes.string,
};

export default Pricing;
