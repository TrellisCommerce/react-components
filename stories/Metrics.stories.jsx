import React from 'react';
import { Metrics } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Metrics',
  component: Metrics,
  //Optional args - More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    metrics: { control: 'array' }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Metrics {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  classNames: {
		metricValue: 'text-primary',
	},
  metrics: [
    {
      id: '1',
      label: 'Star Ratings',
      value: '4.4'
    },
    {
      id: '2',
      label: 'Real User Reviews',
      value: '2,430'
    },
    {
      id: '3',
      label: 'Satisfaction Guaranteed',
      value: '100%'
    }
  ]
};
