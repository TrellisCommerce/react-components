import React from 'react';

const TestComponent = ({
  classNames = {},
  imageAltText,
  imageSrc,
  titleText,
  paragraphText,
}) => (
  <section className={classNames.container}>
    <div className={classNames.section}>
      <div
        className={`md:flex md:justify-between md:items-center ${classNames.layout}`}
      >
        <div className={`md:mr-lg max-w-lg ${classNames.textContainer}`}>
          <h4 className={`mb-xs md:mb-sm font-black ${classNames.title}`}>
            {titleText}
          </h4>
          <p className={`mb-sm md:mb-0 ${classNames.paragraph}`}>
            {paragraphText}
          </p>
        </div>
        <div className={`w-full md:max-w-xl ${classNames.imageContainer}`}>
          <div
            className={`relative pb-3/4 bg-primary rounded-md overflow-hidden ${classNames.imageWrapper}`}
          >
            <img
              className={`top-0 w-full h-full min-h-2/3 object-cover absolute z-0 ${classNames.image}`}
              src={imageSrc}
              alt={imageAltText}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestComponent;
