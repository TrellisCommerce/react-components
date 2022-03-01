import React from 'react';

import { VariantSelector } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'VariantSelector',
  component: VariantSelector,
  //Optional args - More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    typeLabel: { control: 'text', defaultValue: 'color' },
    isColor: { control: 'boolean', defaultValue: false },
    variants: { control: 'array' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <VariantSelector {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'VariantSelector',
  variants: [
    {
      id: '1',
      name: 'White',
      color: 'bg-[blue]',
      isEnabled: true,
    },
    {
      id: '2',
      name: 'Yellow',
      color: 'bg-[blue]',
      isEnabled: true,
    },
    {
      id: '3',
      name: 'Green',
      color: 'bg-[blue]',
      isEnabled: true,
    },
  ],
};
