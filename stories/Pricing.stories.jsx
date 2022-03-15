import React from 'react';

import { Pricing } from '/index.js';

export default {
  title: 'Pricing',
  component: Pricing,
	description: 'Pricing page',
  argTypes: {
    originalPrice: { control: 'text', defaultValue: '$99.99' },
    promotionalPrice: { control: 'text', defaultValue: '$49.99' },
  },
};

export const Primary = (args) => <Pricing {...args} />;
