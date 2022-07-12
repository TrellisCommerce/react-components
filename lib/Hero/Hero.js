import React, { lazy, Suspense } from 'react';
import PropTypes, { element, elementType, node } from 'prop-types';
import { Button as ButtonComponent } from '../Button';
import Content from './Content';
const Carousel = lazy(() =>
  import('./Carousel'),
);

const Hero = ({
  classNames = {},
  title,
  subTitle,
  imageUrl,
  hasOverlay,
  NextImage,
  slides,
  Button = () => (
    <ButtonComponent
      displayText="Shop Now"
      onClick={() => {
        alert('You clicked me');
      }}
    />
  ),
}) => {
  const isSlider = slides !== undefined;

  return (
    <>
      {isSlider ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel>
            {slides.map((slide, index) => (
              <div className="" key={index}>
                <Content
                  title={slide.title}
                  classNames={classNames}
                  subTitle={slide.subTitle}
                  Button={Button}
                  NextImage={NextImage}
                  imageUrl={slide.imageUrl}
                  hasOverlay={hasOverlay}
                />
              </div>
            ))}
          </Carousel>
        </Suspense>
      ) : (
        <Content
          title={title}
          classNames={classNames}
          subTitle={subTitle}
          Button={Button}
          NextImage={NextImage}
          imageUrl={imageUrl}
          hasOverlay={hasOverlay}
        />
      )}
    </>
  );
};
Hero.propTypes = {
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
   * Title of Hero component
   * e.g. `Hello world`
   */
  title: PropTypes.string.isRequired,
  /**
   * Subtitle of Hero component
   * e.g. `How to make you feel good`
   */
  subTitle: PropTypes.string.isRequired,
  /**
   * Hero image URL
   * e.g. `https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80`
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   * Boolean that toggles the overlay
   * e.g. `true`
   */
  hasOverlay: PropTypes.bool,
  /**
   * Next.js Image optimizer component
   * e.g. `import Image from 'next/image'`
   */
  NextImage: PropTypes.elementType,
  /**
   * React Button component
   * e.g. `<ButtonComponent
   *                     displayText="Shop Now"
   *                     onClick={() => {
   *                       alert('You clicked me');
   *                     }}
   *                   />`
   */
  Button: PropTypes.elementType.isRequired,
  /**
   * Array of objects for each slide to display
   * e.g. `[{title: "Women's History Month",subTitle: "Discover our latest women's releases in celebration of Women's History Month",imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"}]`
   */
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
};

export default Hero;
