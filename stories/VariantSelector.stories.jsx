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
    hasSizeGuide: { control: 'boolean', defaultValue: true },
    variants: { control: 'array' },
    OverrideClasses: { control: 'boolean', defaultValue: false },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <VariantSelector {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  label: 'VariantSelector',
  variants: [
    {
      id: '1',
      name: 'Black',
      color: 'Black',
      isEnabled: true,
    },
    {
      id: '2',
      name: 'Aqua',
      color: '#33FFD8',
      isEnabled: true,
    },
    {
      id: '3',
      name: 'Gold',
      color: '#FFEF33',
      isEnabled: true,
    },
    {
      id: '4',
      name: 'Orange',
      color: 'Orange',
      isEnabled: true,
    },
    {
      id: '5',
      name: 'Green',
      color: 'Green',
      isEnabled: true,
    },
    {
      id: '6',
      name: 'White',
      color: 'White',
      isEnabled: true,
    },
  ],
};

export const Colors = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colors.args = {
  label: 'VariantSelector',
  isColor: true,
  variants: [
    {
      id: '1',
      name: 'Black',
      color: 'Black',
      isEnabled: true,
    },
    {
      id: '2',
      name: 'Aqua',
      color: '#33FFD8',
      isEnabled: true,
    },
    {
      id: '3',
      name: 'Gold',
      color: '#FFEF33',
      isEnabled: true,
    },
    {
      id: '4',
      name: 'Orange',
      color: 'Orange',
      isEnabled: true,
    },
    {
      id: '5',
      name: 'Green',
      color: 'Green',
      isEnabled: true,
    },
    {
      id: '6',
      name: 'White',
      color: 'White',
      isEnabled: true,
    },
  ],
};

export const Sizes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sizes.args = {
  label: 'VariantSelector',
  variants: [
    {
      id: '1',
      name: 'XS',
      isEnabled: true,
    },
    {
      id: '2',
      name: 'S',
      isEnabled: true,
    },
    {
      id: '3',
      name: 'M',
      isEnabled: true,
    },
    {
      id: '4',
      name: 'L',
      isEnabled: true,
    },
    {
      id: '5',
      name: 'XL',
      isEnabled: true,
    },
    {
      id: '6',
      name: 'XXL',
      isEnabled: true,
    },
  ],
};
