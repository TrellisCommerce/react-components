import React from 'react';

import { Toggle } from '/index.js';

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text', defaultValue: 'Toggle' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Toggle',
};
