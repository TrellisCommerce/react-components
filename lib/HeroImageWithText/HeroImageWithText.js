import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const HeroImageWithText = ({
  classNames = {},
  imageAltText,
  ImageComponent,
  imageSrc,
  paragraphText,
  titleText,
}) => (
  <section className={clsx(['h-128', classNames.root])}>
    <div className={clsx(['h-full', classNames.container])}>
      <div
        className={clsx([
          'h-full',
          'md:flex',
          'md:items-stretch',
          classNames.layout,
        ])}
      >
        <div
          className={clsx([
            'md:mr-lg',
            'max-w-lg',
            'my-6',
            'mx-8',
            'md:my-12',
            'md:mx-16',
            'md:flex',
            'md:justify-center',
            'md:flex-col',
            'md:basis-full',
            classNames.textContainer,
          ])}
        >
          <h4
            className={clsx([
              'mb-6',
              'md:mb-sm',
              'font-black',
              'text-3xl',
              classNames.title,
            ])}
          >
            {titleText}
          </h4>
          <p className={clsx(['text-lg', classNames.paragraph])}>
            {paragraphText}
          </p>
        </div>
        <div
          className={clsx([
            'w-full',
            'md:basis-full',
            classNames.imageContainer,
          ])}
        >
          {ImageComponent ? (
            <ImageComponent />
          ) : (
            <div
              className={clsx([
                'relative',
                'pb-3/4',
                'md:pb-0',
                'bg-primary',
                'overflow-hidden',
                'w-full',
                'md:h-full',
                classNames.imageWrapper,
              ])}
            >
              <img
                className={clsx([
                  'top-0',
                  'w-full',
                  'h-full',
                  'min-h-2/3',
                  'object-cover',
                  'absolute',
                  'z-0',
                  classNames.image,
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

HeroImageWithText.propTypes = {
  /**
     * object of classNames to add to each part of the component.

     * e.g. `{ root: 'p-2', title: 'text-xl', imageWrapper: ['w-10', 'h-10'] }`
     */
  classNames: PropTypes.shape({
    root: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    container: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    layout: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    textContainer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    paragraph: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    imageContainer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    imageWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /**
   * The alt text for the image, if not using `ImageComponent`
   */
  imageAltText: PropTypes.string,
  /**
   * A custom image component, to be used instead of rendering an `<img />` tag
   */
  ImageComponent: PropTypes.func,
  /**
   * The URL of the image to render, if not using `ImageComponent`
   */
  imageSrc: PropTypes.string,
  /**
   * The paragraph text to be used
   */
  paragraphText: PropTypes.string,
  /**
   * The title text to be used
   */
  titleText: PropTypes.string,
};

export default HeroImageWithText;
