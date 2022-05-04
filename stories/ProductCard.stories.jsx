import React from 'react';

import { ProductCard } from '../lib';

export default {
  title: 'ProductCard',
  component: ProductCard,
  argTypes: {
    // label: { control: 'text', defaultValue: 'Toggle' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Symbolic content Symbolic',
  price: 20.34,
  rating: 2,
  reviews: 12,
  url: '#',
  imageUrl:
    'https://assets.reebok.com/images/w_600,f_auto,q_auto/53a569c611394060b429ad590113099b_9366/Tenis_Zig_Kinetica_II_Los_Supersonicos_Blanco_GW3853.jpg',
};
