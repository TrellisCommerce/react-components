import React from 'react';

import { HeroImageWithText } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'HeroImageWithText',
  component: HeroImageWithText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imageAltText: { control: 'text', defaultValue: 'This is an image' },
    imageSrc: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150',
    },
    titleText: { control: 'text', defaultValue: 'Hello World' },
    paragraphText: {
      control: 'text',
      defaultValue: 'Lorem ipsum dolor sit amet',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeroImageWithText {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'HeroImageWithText',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'HeroImageWithText',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'HeroImageWithText',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'HeroImageWithText',
};
