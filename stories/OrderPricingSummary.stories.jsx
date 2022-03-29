import React from 'react';

import { OrderPricingSummary } from '/index.js';

export default {
  title: 'OrderPricingSummary',
  component: OrderPricingSummary,
  description: 'Pricing page',
  argTypes: {
    breakdown: { control: 'array' },
    totalLabel: { control: 'text', defaultValue: 'Total' },
    totalPrice: { control: 'text', defaultValue: '$16.65' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OrderPricingSummary {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'OrderPricingSummary',
  breakdown: [
    {
      label: 'Subtotal',
      price: '7.99',
    },
    {
      label: 'Shipping',
      price: '7.95',
    },
    {
      label: 'Taxes',
      price: '0.71',
    },
  ],
};
