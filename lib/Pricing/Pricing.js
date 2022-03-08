import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pricing component
 */
const Pricing = (props) => {
	const { classNames, originalPrice, promotionalPrice } = props;

  return (
    <div className="flex">
      {promotionalPrice && (
        <div className={clsx(['text-lg', 'mr-1', classNames?.promotional])}>
          {promotionalPrice}
        </div>
      )}
      <div
        className={clsx([
          promotionalPrice ? ['line-through', 'opacity-50'] : 'text-lg',
          classNames?.original,
        ])}
      >
        {originalPrice}
      </div>
    </div>
  );
};

Pricing.propTypes = {
	/**
	 * object of classNames to be added to each part of the component.
	 
	 * e.g. `{ original: 'my-custom-class', promotional: ['my-custom-class', 'my-other-custom-class'] }`
	 */
	classNames: PropTypes.shape({
		original: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		promotional: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
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
}

export default Pricing;
