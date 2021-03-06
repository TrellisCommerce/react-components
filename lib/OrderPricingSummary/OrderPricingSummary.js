import React from 'react';
import clsx from 'clsx';
import { generateClasses } from '../utils';

/**
 * Order Pricing Summary component
 */
const OrderPricingSummary = (props) => {
  const { classNames = {}, breakdown, totalLabel, totalPrice } = props;

  return (
    <dl className={clsx('text-sm text-gray-500 ', classNames.container)}>
      <div
        className={clsx(
          generateClasses('space-y-1', classNames.breakdownsContainer),
        )}
      >
        {breakdown.map((item) => (
          <div
            className={clsx(
              'flex justify-between',
              classNames.breakdownWrapper,
            )}
          >
            <dt
              className={clsx(generateClasses('', classNames.breakdownLabel))}
            >
              {item.label}
            </dt>
            <dd
              className={clsx(
                generateClasses('text-gray-900', classNames.breakdownPrice),
              )}
            >
              {item.price}
            </dd>
          </div>
        ))}
      </div>

      <div
        className={clsx(
          generateClasses(
            'flex items-center justify-between border-t border-gray-200 text-gray-900 pt-2 mt-3 font-medium ',
            classNames.totalWrapper,
          ),
        )}
      >
        <dt className={clsx(generateClasses('', classNames.totalLabel))}>
          {totalLabel}
        </dt>
        <dd className={clsx(generateClasses('text-lg', classNames.totalPrice))}>
          {totalPrice}
        </dd>
      </div>
    </dl>
  );
};

export default OrderPricingSummary;
