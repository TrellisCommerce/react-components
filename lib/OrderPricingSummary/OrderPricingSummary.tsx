import React from 'react';
import clsx from 'clsx';
import { generateClasses } from '../utils';

interface BreakDown {
  price: string
  label: string
}

interface ClassNames {
  container?: string
  breakdownsContainer?: string
  breakdownWrapper?: string
  breakdownLabel?: string
  breakdownPrice?: string
  totalWrapper?: string
  totalLabel?: string
  totalPrice?: string
}

interface Props {
  classNames?: ClassNames
  breakdown: BreakDown[]
  totalLabel: String
  totalPrice: number
  OverrideClasses?: boolean
}

/**
 * Order Pricing Summary component
 */
const OrderPricingSummary: React.FC<Props> = (props) => {
  const { classNames = {}, breakdown, totalLabel, totalPrice, OverrideClasses } = props;

  return (
    <dl className={clsx('text-sm text-gray-500 ', classNames.container)}>
      <div
        className={clsx(
          generateClasses('space-y-1', classNames.breakdownsContainer, OverrideClasses),
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
              className={clsx(generateClasses('', classNames.breakdownLabel, OverrideClasses))}
            >
              {item.label}
            </dt>
            <dd
              className={clsx(
                generateClasses('text-gray-900', classNames.breakdownPrice, OverrideClasses),
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
            OverrideClasses
          ),
        )}
      >
        <dt className={clsx(generateClasses('', classNames.totalLabel, OverrideClasses))}>
          {totalLabel}
        </dt>
        <dd className={clsx(generateClasses('text-lg', classNames.totalPrice, OverrideClasses))}>
          {totalPrice}
        </dd>
      </div>
    </dl>
  );
};

export default OrderPricingSummary;
