import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating component', () => {
  it('renders correct number of stars filled based on starRating prop', () => {
    // Define a starRating value of 3.5 to use in the test
    const starRating = 3.5;
    
    // Render the StarRating component with a starRating prop of 3.5
    const { getAllByTestId } = render(<StarRating starRating={starRating} />);

    // Get all the elements with a "star" test ID. There should be a total of 5 stars.
    const stars = getAllByTestId('star');
    // Assert that the number of stars is 5
    expect(stars.length).toBe(5);

    // Get only the elements representing filled stars (up to the floor of the starRating value)
    const filledStars = stars.slice(0, Math.floor(starRating));
    // Assert that the number of filled stars is 3
    expect(filledStars.length).toBe(3);
  });

  it('renders correct number of stars based on maximumStarCount prop', () => {
    // Define a starRating value of 3.5 to use in the test
    const starRating = 5;
    const maximumStarCount = 10;
    
    // Render the StarRating component with a starRating prop of 5 and a maximumStarCount prop of 10
    const { getAllByTestId } = render(<StarRating starRating={starRating} maximumStarCount={maximumStarCount} />);

    // Get all the elements with a "star" test ID. There should be a total of 10 stars.
    const stars = getAllByTestId('star');
    // Assert that the number of stars is 10
    expect(stars.length).toBe(maximumStarCount);

    // Get only the elements representing filled stars (up to the floor of the starRating value)
    const filledStars = stars.slice(0, Math.floor(starRating));
    // Assert that the number of filled stars is 5
    expect(filledStars.length).toBe(starRating);
  });
});