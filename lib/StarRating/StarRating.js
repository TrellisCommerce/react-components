import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const StarPath = () => (
  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
);

const StarRating = ({
  classNames,
  starRating,
  maximumStarCount,
  StarSvgPaths,
  isEditable,
  onChange,
  CallToAction,
}) => {
  const [selectedStar, setSelectedStar] = useState(false);

  const humanFriendlyStarRating = Number.isInteger(starRating)
    ? starRating
    : starRating?.toFixed(1);

  const renderStars = useMemo(() => {
    const starComponents = [];

    for (let i = 0; i < maximumStarCount; i += 1) {
      starComponents.push(
        <svg
          key={i}
          className={clsx([
            'h-5',
            'w-5',
            'flex-shrink-0',
            classNames?.starSize,
            (!selectedStar && i < parseInt(starRating)) ||
            (isEditable && i < selectedStar)
              ? classNames?.activeStar ?? 'text-yellow-400'
              : classNames?.inactiveStar ?? 'text-gray-300',
          ])}
          viewBox="0 0 25 25"
          fill="currentColor"
          onMouseOver={() => isEditable && setSelectedStar(i + 1)}
          onClick={() => isEditable && onChange(i + 1)}
          focusable={isEditable}
          role={isEditable ? '' : 'img'}
          aria-labelledby={`title-${i}`}
          aria-describedby={`desc-${i}`}
          role={isEditable ? 'button' : 'img'}
        >
          <title id={`title-${i}`}>Star</title>
          <desc id={`desc-${i}`}>{`${i} star review`}</desc>
          <use xlinkHref="#star-icon" />
        </svg>,
      );
    }

    return starComponents;
  }, [
    starRating,
    isEditable,
    selectedStar,
    onChange,
    setSelectedStar,
    classNames?.activeStar,
    classNames?.inactiveStar,
    classNames?.starSize,
  ]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" display="none" className="hidden">
        <symbol id="star-icon">
          <StarSvgPaths />
        </symbol>
      </svg>

      <div
        className={clsx([
          'flex',
          'items-center',
          isEditable && 'hover:cursor-pointer',
          classNames?.container,
        ])}
      >
        <span
          className={clsx([
            'text-xs',
            'mr-3',
            'text-center',
            'min-w-[20px]',
            classNames?.starRating,
          ])}
        >
          {selectedStar || humanFriendlyStarRating}
        </span>
        <div
          className={clsx(['flex', 'items-center'])}
          onMouseLeave={() => isEditable && setSelectedStar(false)}
        >
          {renderStars}
        </div>

        {CallToAction && (
          <span className={clsx(['text-xs', 'ml-6'])}>{CallToAction()}</span>
        )}
      </div>
    </>
  );
};

StarRating.propTypes = {
  /**
	  * object of classNames to be added to each part of the component.
	 
	  * e.g. `{ activeStar: '#FFFFFF', starRating: 'text-xl', starSize: ['w-10', 'h-10'] }`
	 
	  * default `{ activeStar: 'text-yellow-400', inactiveStar: 'text-gray-300' }`
	 */
  classNames: PropTypes.PropTypes.shape({
    container: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    starSize: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    activeStar: PropTypes.string,
    inactiveStar: PropTypes.string,
    starRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /** If starRating is an int, this will keep it as such (no decimals).
		* If starRating is a float, it will be rounded to 1 decimal.

		* ex.: for starRating = 4, humanFriendlyStarRating will be 4
		* For starRating = 3.466445, humanFriendlyStarRating will be 3.4
	 */
  starRating: PropTypes.number,
  /**
   * The maximum number of stars to display.
   */
  maximumStarCount: PropTypes.number,
  /**
   * Component to render path of the star icon.
   */
  StarSvgPaths: PropTypes.func,
  /**
   * Make the star rating component a selector.
   */
  isEditable: PropTypes.bool,
  /**
   * The onChange handler for the star rating.
   */
  onChange: PropTypes.func,
  /**
   * Call to action component.
   */
  CallToAction: PropTypes.func,
};

StarRating.defaultProps = {
  starRating: 0,
  maximumStarCount: 5,
  StarSvgPaths: StarPath,
  isEditable: false,
  onChange: (value) => value,
};

export default StarRating;
