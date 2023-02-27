import React from 'react';
import { render } from '@testing-library/react';
import Metrics from './Metrics';

describe('Metrics component', () => {
  const metrics = [
    { id: 'metric1', label: 'Metric 1', value: '10' },
    { id: 'metric2', label: 'Metric 2', value: '20' },
  ];

  it('should render metric values and labels', () => {
    const { getByText } = render(<Metrics metrics={metrics} />);
    metrics.forEach((metric) => {
      expect(getByText(metric.value)).toHaveTextContent(metric.value);
      expect(getByText(metric.label)).toHaveTextContent(metric.label);
    });
  });
});
