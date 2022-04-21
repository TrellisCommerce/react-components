import React from 'react';
import clsx from 'clsx';
import { Button as ButtonComponent } from '../Button';
import Content from './Content'
import { Carousel } from "../vendor";

const Hero = ({
  classNames = {},
  title,
  subTitle,
  imageUrl,
  button,
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

  /**
   * Next Image loader
   * @returns {*}
   */
  const myLoader = ()  => {
    return imageUrl
  }

  const isSlider = slides !== undefined

  return (
    <>
      {isSlider ?
       <Carousel>
         {slides.map((slide, index) => (
           <div className="embla__slide" key={index}>
             <div
               style={{
                 background:
                   hasOverlay
                     ? 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(' + slide.imageUrl + ')'
                     : 'url(' + slide.imageUrl + ')',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 height: "100vh",
                 width: "100vw"
               }}
               className={clsx(
                 'px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8',
                 classNames.contentWrapper,
               )}
             >
               <h1
                 className={clsx(
                   'text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl',
                   classNames.titleWrapper,
                 )}
               >
          <span className={clsx('block text-white', classNames.title)}>
            {slide.title}
          </span>
               </h1>
               <p
                 className={clsx(
                   'mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl',
                   classNames.subTitle,
                 )}
               >
                 {slide.subTitle}
               </p>
               <div
                 className={clsx(
                   'mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center  lg:max-w-sm',
                   classNames.buttonWrapper,
                 )}
               >
                 {Button()}
               </div>
             </div>
           </div>
         ))}
       </Carousel>
        : <Content
          title={title}
          classNames={classNames}
          slides={slides}
          subTitle={subTitle}
          Button={Button}
          NextImage={NextImage}
          imageUrl={imageUrl}
        />
        }
    </>


  );
};

export default Hero;
