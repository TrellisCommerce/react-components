import React from 'react';
import { Features } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features',
  component: Features,
  //Optional args - More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    metrics: { control: 'array' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Features {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  classNames: {
    featureWrapper: 'content-center',
  },
  title: 'How to make you feel good',
  features: [
    {
      id: '1',
      icon: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-Setting-essential-collection-bearicons-glyph-bearicons.png',
      title: 'Super Organized',
      subTitle: 'Since wire-frame renderings are relatively simple.',
    },
    {
      id: '2',
      icon: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-Setting-essential-collection-bearicons-glyph-bearicons.png',
      title: 'Super Organized',
      subTitle: 'Since wire-frame renderings are relatively simple.',
    },
    {
      id: '3',
      icon: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-Setting-essential-collection-bearicons-glyph-bearicons.png',
      title: 'Super Organized',
      subTitle:
        'Since wire-frame renderings are relatively simple. Since wire-frame renderings are relatively simple.',
    },
  ],
};
