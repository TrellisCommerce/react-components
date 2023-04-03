import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Features from './Features';

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

afterEach(cleanup);
describe('Features Component', () => {
  it('should render the title and the features', () => {
    const { getByText } = render(
      <Features title="Features" features={features} />,
    );

    const title = getByText('Features');
    const feature1Title = getByText('Feature 1');
    const feature2Title = getByText('Feature 2');

    expect(title).toBeInTheDocument();
    expect(feature1Title).toBeInTheDocument();
    expect(feature2Title).toBeInTheDocument();
  });
});
