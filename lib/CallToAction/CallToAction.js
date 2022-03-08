import React from 'react';
import clsx from 'clsx';

const CallToAction = ({
  classNames = {},
  imageAltText,
  imageSrc,
  titleText,
  paragraphText,
}) => (
  <section className={clsx(classNames.container)}>
    <div className={clsx(classNames.section)}>
      <div
        className={clsx([
          'md:flex',
          'md:justify-between',
          'md:items-center',
          classNames.layout,
        ])}
      >
        <div
          className={clsx(['md:mr-lg', 'max-w-lg', classNames.textContainer])}
        >
          <h4
            className={clsx([
              'mb-xs',
              'md:mb-sm',
              'font-black',
              classNames.title,
            ])}
          >
            {titleText}
          </h4>
          <p className={clsx(['mb-sm', 'md:mb-0', classNames.paragraph])}>
            {paragraphText}
          </p>
        </div>
        <div
          className={clsx(['w-full', 'md:max-w-xl', classNames.imageContainer])}
        >
          <div
            className={clsx([
              'relative',
              'pb-3/4',
              'bg-primary',
              'rounded-md',
              'overflow-hidden',
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
                'absolute z-0',
                classNames.image,
              ])}
              src={imageSrc}
              alt={imageAltText}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
