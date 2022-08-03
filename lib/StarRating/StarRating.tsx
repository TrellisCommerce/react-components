import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { generateClasses } from '../utils';

const StarPath = () => (
  <path d="M8.34991 7.46898L7.54933 4.98446L6.74894 7.4684L3.99817 7.50178L6.20566 9.22399L5.43171 11.8229L7.54986 10.2488L9.66688 11.8226L8.8932 9.22456L11.1007 7.50236L8.34991 7.46898ZM14.4743 5.90682C14.8983 5.91199 15.0738 6.47838 14.7337 6.74346L14.4615 6.95582L10.7802 9.82781L12.2487 14.7591C12.3749 15.1835 11.9157 15.5331 11.5696 15.276L7.5497 12.2877L3.83163 15.0508L3.52925 15.2754C3.18365 15.5325 2.72395 15.1823 2.85013 14.7585L4.31864 9.82723L0.637386 6.95529L0.365112 6.74288C0.0249994 6.4778 0.200541 5.91142 0.624584 5.90625L5.55237 5.84644L7.12949 0.95196C7.26554 0.531054 7.83386 0.531054 7.96936 0.952536L9.54653 5.84702L14.4743 5.90682Z" />
);

const FilledStarPath = () => (
  <path d="M8.33044 0.952536L9.90761 5.84702L14.8354 5.90682C15.2594 5.91199 15.4349 6.47838 15.0948 6.74346L11.1413 9.82781L12.6098 14.7591C12.736 15.1835 12.2768 15.5331 11.9307 15.276L7.91078 12.2877L3.89033 15.2754C3.54473 15.5325 3.08504 15.1823 3.21121 14.7585L4.67972 9.82723L0.726196 6.74288C0.386083 6.4778 0.561625 5.91142 0.985668 5.90625L5.91345 5.84644L7.49058 0.95196C7.62663 0.531054 8.19494 0.531054 8.33044 0.952536Z" />
);

interface ClassNames {
  starSize?: string;
  activeStar?: string;
  inactiveStar?: string;
  container?: string;
}

interface Props {
  classNames?: ClassNames;
  starRating: number;
  StarSvgPaths?: React.FC;
  maximumStarCount?: number;
  FilledStarSvgPaths?: React.FC;
  isEditable?: boolean;
  overrideClasses?: boolean;
  CallToAction?: React.FC;
  onChange?: (val: number) => {};
}

const StarRating: React.FC<Props> = ({
  classNames,
  starRating,
  maximumStarCount,
  StarSvgPaths,
  FilledStarSvgPaths,
  isEditable,
  onChange,
  CallToAction,
  overrideClasses,
}) => {
  const [selectedStar, setSelectedStar] = useState<undefined | number>(
    undefined,
  );

  const humanFriendlyStarRating = Number.isInteger(starRating)
    ? starRating
    : starRating?.toFixed(1);

  const renderStars = useMemo(() => {
    const starComponents = [];

    let isActiveStar;

    for (let i = 0; i < maximumStarCount; i += 1) {
      isActiveStar =
        (!selectedStar && i < starRating) || (isEditable && i < selectedStar);

      starComponents.push(
        <svg
          key={i}
          className={clsx([
            'h-4',
            'w-4',
            'mr-1',
            'flex-shrink-0',
            classNames?.starSize,
            isActiveStar
              ? classNames?.activeStar ?? 'text-secondary'
              : classNames?.inactiveStar ?? 'text-secondary',
          ])}
          viewBox="0 0 15 15"
          fill="currentColor"
          onMouseOver={() => isEditable && setSelectedStar(i + 1)}
          onClick={() => isEditable && onChange(i + 1)}
          focusable={isEditable}
          aria-labelledby={`title-${i}`}
          aria-describedby={`desc-${i}`}
          role={isEditable ? 'button' : 'img'}
        >
          <title id={`title-${i}`}>Star</title>
          <desc id={`desc-${i}`}>{`${i} star review`}</desc>
          <use xlinkHref={`#${isActiveStar ? 'filled-' : ''}star-icon`} />
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

        <symbol id="filled-star-icon">
          <FilledStarSvgPaths />
        </symbol>
      </svg>

      <div
        className={clsx([
          generateClasses(
            'flex items-center',
            classNames?.container,
            overrideClasses,
          ),
          isEditable && 'hover:cursor-pointer',
        ])}
      >
        <div
          className={clsx(['flex', 'items-center'])}
          onMouseLeave={() => isEditable && setSelectedStar(undefined)}
        >
          {renderStars}
        </div>

        {CallToAction && (
          <span className={clsx(['text-xs', 'ml-3'])}>
            <CallToAction />
          </span>
        )}
      </div>
    </>
  );
};

StarRating.defaultProps = {
  starRating: 0,
  maximumStarCount: 5,
  StarSvgPaths: StarPath,
  FilledStarSvgPaths: FilledStarPath,
  isEditable: false,
  onChange: (value) => value,
};

export default StarRating;
