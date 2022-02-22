import React from 'react';
import classnames from 'classnames';

const StarRating = ({ starRating, maximumStarCount, StarSvgPaths }) => {
    function renderStars() {
        const starComponents = [];

        for (let i = 0; i < maximumStarCount; i += 1) {
            starComponents.push(
                <div className="w-10">
                    <svg>
                        <use xlinkHref="#star-icon"/>
                    </svg>
                </div>
            );
        }

        return starComponents;
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" display="none">
                <symbol id="star-icon">
                    {StarSvgPaths ?
                        <StarSvgPaths /> :
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    }
                </symbol>
            </svg>

            <div className={classnames(['star-rating-wrapper', 'flex'])}>
                {renderStars()}
            </div>
        </>
    );
}

export default StarRating;
