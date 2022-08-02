import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { generateClasses } from '../utils';

interface ClassNames {
  container?: string;
  metricWrapper?: string;
  metricValue?: string;
  metricLabel?: string;
}

interface Metric {
  id: string;
  label: string;
  value: string;
}

interface Props {
  classNames?: ClassNames;
  metrics: Metric[];
  OverrideClasses?: boolean;
}

const Metrics: React.FC<Props> = ({ classNames, metrics, OverrideClasses }) => {
  return (
    <div
      className={clsx([
        'grid sm:grid-cols-1  md:grid-cols-3 gap-4',
        classNames?.container,
      ])}
    >
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className={clsx([
            generateClasses(
              'flex flex-col items-center',
              classNames?.metricWrapper,
              OverrideClasses,
            ),
          ])}
        >
          <div
            className={clsx([
              generateClasses(
                'text-6xl font-bold',
                classNames?.metricValue,
                OverrideClasses,
              ),
            ])}
          >
            {metric.value}
          </div>
          <div
            className={clsx([
              generateClasses('pt-1', classNames?.metricLabel, OverrideClasses),
            ])}
          >
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
