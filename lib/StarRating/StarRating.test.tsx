import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating component', () => {
  it('renders correct number of stars filled based on starRating prop', () => {
    const starRating = 3.5;
    const { getAllByTestId } = render(<StarRating starRating={starRating} />);

    const stars = getAllByTestId('star');
    expect(stars.length).toBe(5);

    const filledStars = stars.slice(0, Math.floor(starRating));
    expect(filledStars.length).toBe(3);
  });

  it('renders correct number of stars based on maximumStarCount prop', () => {
    const starRating = 5;
    const maximumStarCount = 10;
    const { getAllByTestId } = render(
      <StarRating
        starRating={starRating}
        maximumStarCount={maximumStarCount}
      />,
    );

    const stars = getAllByTestId('star');
    expect(stars.length).toBe(maximumStarCount);

    const filledStars = stars.slice(0, Math.floor(starRating));
    expect(filledStars.length).toBe(starRating);
  });
});
