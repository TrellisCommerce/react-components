import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { generateClasses } from '../utils';
interface ClassNames {
  root?: string;
  title?: string;
  featureWrapper?: string;
  featureTitle?: string;
  featureSubtitle?: string;
  container?: string;
}
interface Feature {
  id: string;
  icon: string;
  title: string;
  subTitle: string;
}
interface Props {
  classNames?: ClassNames;
  features: Feature[];
  title: string;
  OverrideClasses?: boolean;
}
const Features: React.FC<Props> = ({
  classNames,
  features,
  title,
  OverrideClasses,
}) => {
  return (
    <div className={clsx('sm:m-8 lg:m-32 md:m-8 ', classNames?.container)}>
      <h1
        className={clsx(
          generateClasses(
            'col-start-1 col-end-7 font-extrabold text-center text-5xl mb-12',
            classNames?.title,
            OverrideClasses,
          ),
        )}
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
            className={clsx([
              generateClasses(
                'flex flex-col align-center text-center w-80 mx-auto',
                classNames?.featureWrapper,
                OverrideClasses,
              ),
            ])}
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
              className={clsx([
                generateClasses(
                  'pt-1 text-2xl font-bold mb-6',
                  classNames?.featureTitle,
                  OverrideClasses,
                ),
              ])}
            >
              {feature.title}
            </h2>
            <p
              className={clsx([
                generateClasses(
                  'pt-1 text-lg',
                  classNames?.featureSubtitle,
                  OverrideClasses,
                ),
              ])}
            >
              {feature.subTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
