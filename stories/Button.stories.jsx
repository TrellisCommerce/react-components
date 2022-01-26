import React from 'react';

import { TestComponent } from '/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TestComponent',
  component: TestComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imageAltText: { control: 'text' },
    imageSrc: { control: 'text' },
    titleText: { control: 'text' },
    paragraphText: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TestComponent {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'TestComponent',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'TestComponent',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'TestComponent',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'TestComponent',
};
