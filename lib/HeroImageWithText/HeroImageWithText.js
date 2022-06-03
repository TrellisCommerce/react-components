import React from 'react';
import clsx from 'clsx';

const HeroImageWithText = ({
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
          className={clsx(['w-full', 'md:max-w-xl', classNames.imageContainer])}
        >
          <div
            className={clsx([
              'relative',
              'pb-3/4',
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
        </div>
      </div>
    </div>
  </section>
);

export default HeroImageWithText;
