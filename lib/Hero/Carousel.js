import React, { useState } from 'react';
import LeftChevron from '../Icons/LeftChevron';
import RightChevron from '../Icons/RightChevron';
import { useSwipeable } from 'react-swipeable';

const Carousel = ({ children }) => {
  const slideLength = children.length;
  const handleNextClick = () => {
    const index = currentIndex === slideLength - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  const handleOnPrevClick = () => {
    const index = currentIndex === 0 ? slideLength - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handleOnPrevClick,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="m-auto">
      <div className="w-full relative select-none">
        <LeftChevron  onClick={handleOnPrevClick}
                      className=" absolute left-0 text-3xl inset-y-1/2 cursor-pointer stroke-slate-800"
                      fill="black"
        />
        <div {...handlers}>
          {children.map((child, index) =>
            React.cloneElement(child, {
              className: `
                  ${
                    index === currentIndex
                      ? 'block w-full h-auto object-cover'
                      : 'hidden'
                  }
              `,
            }),
          )}
        </div>
        <div className="absolute w-full flex justify-center bottom-0">
          {children.map((element, index) => {
            return (
              <div
                className={`h-2 w-2 rounded-full mx-2 mb-2 cursor-pointer ${index === currentIndex ? "bg-black" : "bg-white"}`}
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            );
          })}
        </div>
        <RightChevron
          onClick={handleNextClick}
          className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer stroke-slate-800"
          alt="right arrow"
        />
      </div>
    </div>
  );
};

export default Carousel;
