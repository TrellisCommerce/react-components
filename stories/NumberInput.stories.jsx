import React, { useState } from 'react';
import SSR from "../lib/SSR";

import { NumberInput } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NumberInput',
  component: NumberInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: 'onChange'},
  },

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = (args) => {
  const [quantity, setQuantity] = useState(1);
  const onChange = (elementId, quantity) => {
   setQuantity(quantity)
  };
  return (
    <NumberInput
      {...args}
      value={quantity}
      onChange={onChange}
    />
  )

};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: 1,
  elementId: "test"
};

export const Ssr = (args) => <SSR {...args} component={'NumberInput'} />