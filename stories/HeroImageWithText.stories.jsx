import React, { useState } from 'react';

import { HeroImageWithText } from '/index.js';
import SSR from '../lib/SSR';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'HeroImageWithText',
  component: HeroImageWithText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imageAltText: { control: 'text', defaultValue: 'This is an image' },
    imageSrc: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/800',
    },
    titleText: {
      control: 'text',
      defaultValue: 'Wireframes can be pencil drawings on a whiteboard.',
    },
    paragraphText: {
      control: 'text',
      defaultValue:
        'High-fidelity wireframes are often used for documenting because they incorporate a level of detail that more closely matches the design of the actual webpage, thus taking longer',
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

export const Ssr = (args) => {
  return <SSR {...args} component={'HeroImageWithText'} />;
};
