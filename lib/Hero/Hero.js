import React, { lazy, Suspense } from 'react';
import { Button as ButtonComponent } from '../Button';
import Content from './Content'
const Carousel = lazy(() => import('../vendor/EmblaCarousel/Carousel/Carousel'));

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
  const isSlider = slides !== undefined

  return (
    <>
      {isSlider ?
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
        : <Content
          title={title}
          classNames={classNames}
          subTitle={subTitle}
          Button={Button}
          NextImage={NextImage}
          imageUrl={imageUrl}
          hasOverlay={hasOverlay}
        />
        }
    </>
  );
};

export default Hero;
