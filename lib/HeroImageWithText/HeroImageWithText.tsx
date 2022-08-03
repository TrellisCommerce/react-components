import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { generateClasses } from '../utils';

interface ClassNames {
  root?: string;
  container?: string;
  textContainer?: string;
  layout?: string;
  title?: string;
  paragraph?: string;
  imageContainer?: string;
  imageWrapper?: string;
  image?: string;
}

interface Props {
  classNames?: ClassNames;
  imageAltText: string;
  Image: React.FC;
  imageSrc: string;
  paragraphText: string;
  titleText: string;
  overrideClasses?: boolean;
}

const HeroImageWithText: React.FC<Props> = ({
  classNames = {},
  imageAltText,
  Image,
  imageSrc,
  paragraphText,
  titleText,
  overrideClasses,
}) => (
  <section
    className={clsx([
      generateClasses('h-128', classNames.root, overrideClasses),
    ])}
  >
    <div
      className={clsx([
        generateClasses('h-full', classNames.container, overrideClasses),
      ])}
    >
      <div
        className={clsx([
          generateClasses(
            'h-full md:flex md:items-stretch',
            classNames.layout,
            overrideClasses,
          ),
        ])}
      >
        <div
          className={clsx([
            generateClasses(
              'md:mr-lg max-w-lg my-6 mx-8 md:my-12 md:mx-16 md:flex md:justify-center md:flex-col md:basis-full',
              classNames.textContainer,
              overrideClasses,
            ),
          ])}
        >
          <h4
            className={clsx([
              generateClasses(
                'mb-6 md:mb-sm font-black text-3xl',
                classNames.title,
                overrideClasses,
              ),
            ])}
          >
            {titleText}
          </h4>
          <p
            className={clsx([
              generateClasses('text-lg', classNames.paragraph, overrideClasses),
            ])}
          >
            {paragraphText}
          </p>
        </div>
        <div
          className={clsx([
            generateClasses(
              'w-full md:basis-full',
              classNames.imageContainer,
              overrideClasses,
            ),
          ])}
        >
          {Image ? (
            <Image />
          ) : (
            <div
              className={clsx([
                generateClasses(
                  'relative pb-3/4 md:pb-0 bg-primary overflow-hidden w-full md:h-full',
                  classNames.imageWrapper,
                  overrideClasses,
                ),
              ])}
            >
              <img
                className={clsx([
                  generateClasses(
                    'top-0 w-full h-full min-h-2/3 object-cover absolute z-0',
                    classNames.image,
                    overrideClasses,
                  ),
                ])}
                src={imageSrc}
                alt={imageAltText}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default HeroImageWithText;
