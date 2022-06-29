import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Metrics = ({
  classNames,
  metrics
}) => {
  return (
    <div className={clsx(['grid sm:grid-cols-1  md:grid-cols-3 gap-4', classNames?.container])}>
      {metrics.map((metric) => (
        <div key={metric.id} className={clsx(['flex flex-col items-center', classNames?.metricWrapper])}>
          <div className={clsx(['text-6xl font-bold', classNames?.metricValue])}>{metric.value}</div>
          <div className={clsx(['pt-1', classNames?.metricLabel])}>{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

Metrics.propTypes = {
	/**
	 * Object of classNames to be added to each part of the component.

	 * e.g. `{ container: 'my-custom-class', metricWrapper: 'my-other-custom-class' }`
	 */
	classNames: PropTypes.shape({
		container: PropTypes.string,
		metricWrapper: PropTypes.string,
    metricValue: PropTypes.string,
    metricLabel: PropTypes.string,
	}),
	/**
	 * Array of objects for each metric to display

   * e.g. `[{ id: 3, value: '100%', label: 'Satisfaction Guaranteed' }]`
	 */
  metrics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired
}

export default Metrics;
