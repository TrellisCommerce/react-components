import React from 'react';
import classnames from 'classnames';

const StarPath = () => (
    <path
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
    />
)

const StarRating = ({
    classNames,
    maximumStarCount = 5,
    reviewCount,
    showStarCount = false,
    starRating,
    StarSvgPaths = StarPath
}) => {

    let activeStarColorClass = classNames?.activeStar ?? 'text-yellow-400';
    let inactiveStarColorClass = classNames?.inactiveStar ?? 'text-gray-300';

    /** If starRating is an int, this will keep it as such (no decimals).
        If starRating is a float, it will be rounded to 2 decimals.

        ex.: for starRating = 4, humanFriendlyStarRating will be 4.
        For starRating = 3.466445, humanFriendlyStarRating will be 3.47.
     **/
    const humanFriendlyStarRating = Math.round(starRating * 100) / 100;

    function renderStars() {
        const starComponents = [];

        for (let i = 0; i < maximumStarCount; i += 1) {
            starComponents.push(
                <svg
                    className={classnames([
                        'h-5',
                        'w-5',
                        'flex-shrink-0',
                        i >= parseInt(starRating) ? inactiveStarColorClass : activeStarColorClass
                    ])}
                    viewBox="0 0 25 25"
                    fill="currentColor"
                >
                    <use xlinkHref="#star-icon"/>
                </svg>
            );
        }

        return starComponents;
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" display="none" className="hidden">
                <symbol id="star-icon">
                    <StarSvgPaths />
                </symbol>
            </svg>

            <div className={classnames(['flex', 'items-center'])}>
                {showStarCount &&
                    <span className={classnames(['text-xs', 'mr-3', 'w-5'])}>{humanFriendlyStarRating}</span>
                }

                <div className={classnames(['flex', 'items-center'])}>
                    {renderStars()}
                </div>

                {reviewCount &&
                    <span className={classnames(['text-xs', 'ml-6'])}>See all {reviewCount} reviews</span>
                }
            </div>
        </>
    );
}

export default StarRating;
