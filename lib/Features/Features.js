import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { generateClasses } from "../utils";

const Features = ({ classNames, features, title }) => {
  return (
    <div className={clsx('sm:m-8 lg:m-32 md:m-8 ', classNames?.container)}>
      <h1
        className={clsx(generateClasses('col-start-1 col-end-7 font-extrabold text-center text-5xl mb-12', classNames?.title))}
      >
        {title}
      </h1>
      <div
        className={clsx([
          'flex justify-center md:justify-between md:flex-row flex-col',
        ])}
      >
        {features.map((feature) => (
          <div
            key={feature.id}
            className={clsx([generateClasses('flex flex-col align-center text-center w-80 mx-auto', classNames?.featureWrapper)])}
          >
            <div className="mt-4 mb-6 text-center">
              <img
                className={clsx(['inline'])}
                src={feature.icon}
                height="56"
                width="56"
                alt={feature.title}
              />
            </div>
            <h2
              className={clsx([generateClasses('pt-1 text-2xl font-bold mb-6', classNames?.featureTitle)
              ])}
            >
              {feature.title}
            </h2>
            <p className={clsx([generateClasses('pt-1 text-lg', classNames?.featureSubtitle)])}>
              {feature.subTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Features.propTypes = {
  /**
	 * Object of classNames to be added to each part of the component.

	 * e.g. `{ container: 'my-custom-class', container: 'my-other-custom-class' }`
	 */
  classNames: PropTypes.shape({
    container: PropTypes.string,
    title: PropTypes.string,
    featureWrapper: PropTypes.string,
    featureTitle: PropTypes.string,
    featureSubtitle: PropTypes.string,
  }),
  /**
	 * Array of objects for each feature box to display

   * e.g. `[{ id: 3, icon: 'spinner', title: 'Super Organized', subtitle: 'Since wire-frame renderings are relatively simple.' }]`
	 */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.string,
      title: PropTypes.string,
      subTitle: PropTypes.string,
    }),
  ).isRequired,
  /**
   * Title of feature component

   * e.g. `How to make you feel good`
   */
  title: PropTypes.string.isRequired,
};

export default Features;
