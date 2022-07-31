import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { generateClasses } from '../utils';
import { PricingClassNames } from '../utils/types'

interface Props {
  classNames: PricingClassNames,
  originalPrice: string
  promotionalPrice: string
  OverrideClasses?: boolean
}

/**
 * Pricing component
 */
const Pricing: React.FC<Props> = (props) => {
  const { classNames, originalPrice, promotionalPrice, OverrideClasses } = props;

  return (
    <div className="flex">
      {promotionalPrice && (
        <span
          className={clsx([
            generateClasses(
              'text-md font-medium mr-1',
              classNames?.promotional,
              OverrideClasses
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

export default Pricing;
