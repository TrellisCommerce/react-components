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

// options: [
//   { id: '1', name: 'XXS', isDisabled: false },
//   { id: '2', name: 'XS', isDisabled: false },
//   { id: '3', name: 'S', isDisabled: false },
//   { id: '4', name: 'M', isDisabled: true },
//   { id: '5', name: 'L', isDisabled: false },
//   { id: '6', name: 'XL', isDisabled: false },
//   { id: '7', name: '2XL', isDisabled: true },
//   { id: '8', name: '3XL', isDisabled: true },
// ],
