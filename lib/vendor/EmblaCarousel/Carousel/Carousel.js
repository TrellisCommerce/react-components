import { useState } from "react";
let count = 0;
const Carousel = ({slides}) => {
  const handleNextClick = () => {
    count = (count + 1) % slides.length
    setCurrentIndex(count);
  }
  const handleOnPrevClick = () => {
    const productsLength = slides.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        <img src={slides[currentIndex].imageUrl} alt="" />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
