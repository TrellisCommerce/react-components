import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel = ({children}) => {
  const slideLength = children.length;
  const handleNextClick = () => {
    const index = currentIndex === slideLength - 1 ? 0 : currentIndex + 1
    setCurrentIndex(index)
  }
  const handleOnPrevClick = () => {
    const index = currentIndex === 0 ? slideLength - 1 : currentIndex - 1
    setCurrentIndex(index)
  };

  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="m-auto">
      <div className="w-full relative select-none">
        <AiOutlineLeft
          onClick={handleOnPrevClick}
          className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
        />
        <Swipe>
          {
            children.map((child, index) =>
              React.cloneElement(child, {
                className: `
                  ${index === currentIndex
                  ? "block w-full h-auto object-cover"
                  : "hidden"}
              `})
            )
          }
          <div>
          </div>
        </Swipe>
        <div className="absolute w-full flex justify-center bottom-0">
          {children.map((element, index) => {
            return (
              <div
                className={
                  index === currentIndex
                    ? "h-2 w-2 bg-black rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                />
            );
          })}
        </div>
        <AiOutlineRight
          onClick={handleNextClick}
          className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
        />
        </div>
      </div>
  );
};

export default Carousel;
