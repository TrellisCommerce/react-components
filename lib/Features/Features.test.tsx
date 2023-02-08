import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Features from './Features';

// Define an array of features to test
const features = [
  {
    id: '1',
    icon: 'feature1.svg',
    title: 'Feature 1',
    subTitle: 'This is feature 1',
  },
  {
    id: '2',
    icon: 'feature2.svg',
    title: 'Feature 2',
    subTitle: 'This is feature 2',
  },
];

// Clean up after each test
afterEach(cleanup);
describe('Features Component', () => {
  it('should render the title and the features', () => {
    const { getByText } = render(
      <Features title="Features" features={features} />,
    );

    // Get references to the title and features
    const title = getByText('Features');
    const feature1Title = getByText('Feature 1');
    const feature2Title = getByText('Feature 2');

    // Check that the title and features are in the document
    expect(title).toBeInTheDocument();
    expect(feature1Title).toBeInTheDocument();
    expect(feature2Title).toBeInTheDocument();
  });
});
