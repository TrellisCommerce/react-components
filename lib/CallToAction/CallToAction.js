import React from 'react';
import classnames from 'classnames';

const CallToAction = ({
  classNames = {},
  imageAltText,
  imageSrc,
  titleText,
  paragraphText,
}) => (
  <section className={classnames(classNames.container)}>
    <div className={classnames(classNames.section)}>
      <div
        className={classnames([
          'md:flex',
          'md:justify-between',
          'md:items-center',
          classNames.layout,
        ])}
      >
        <div
          className={classnames([
            'md:mr-lg',
            'max-w-lg',
            classNames.textContainer,
          ])}
        >
          <h4
            className={classnames([
              'mb-xs',
              'md:mb-sm',
              'font-black',
              classNames.title,
            ])}
          >
            {titleText}
          </h4>
          <p className={classnames(['mb-sm', 'md:mb-0', classNames.paragraph])}>
            {paragraphText}
          </p>
        </div>
        <div
          className={classnames([
            'w-full',
            'md:max-w-xl',
            classNames.imageContainer,
          ])}
        >
          <div
            className={classnames([
              'relative',
              'pb-3/4',
              'bg-primary',
              'rounded-md',
              'overflow-hidden',
              classNames.imageWrapper,
            ])}
          >
            <img
              className={classnames([
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
