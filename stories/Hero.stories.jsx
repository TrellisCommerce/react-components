import React from 'react';
import Image from 'next/image';

import { Button as ButtonComponent, Hero } from '/index.js';
const Button = () => {
  return (
    <ButtonComponent
      displayText="Shop Now"
      onClick={() => {
        alert('You clicked me');
      }}
    />
  );
};
/**
 * Next Image loader
 * @returns {*}
 */
const myLoader = (src) => {
  return src;
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Hero',
  component: Hero,
  Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    slides: [
      {
        title: "Women's History Month",
        subTitle:
          "Discover our latest women's releases in celebration of Women's History Month",
        imageUrl: 'https://source.unsplash.com/random/1600x900',
      },
    ],
    hasOverlay: { control: 'boolean', defaultValue: false },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Hero {...args} />;

export const SinglePrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SinglePrimary.args = {
  label: 'Hero',
  Button,
  slides: [
    {
      title: "Women's History Month",
      subTitle:
        "Discover our latest women's releases in celebration of Women's History Month",
      imageUrl: 'https://source.unsplash.com/random/1600x900',
    },
  ],
};

export const Carousel = Template.bind({});
Carousel.args = {
  label: 'Hero',
  Button,
  slides: [
    {
      title: "Women's History Month",
      subTitle:
        "Discover our latest women's releases in celebration of Women's History Month",
      imageUrl: 'https://source.unsplash.com/random/1600x900',
    },
    {
      title: "Women's History Month",
      subTitle:
        "Discover our latest women's releases in celebration of Women's History Month",
      imageUrl:
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      title: "Women's History Month",
      subTitle:
        "Discover our latest women's releases in celebration of Women's History Month",
      imageUrl: 'https://source.unsplash.com/random/1600x900',
    },
  ],
};
export const CustomImageComponent = Template.bind({});
CustomImageComponent.args = {
  label: 'Hero',
  Button,
  slides: [
    {
      title: "Women's History Month",
      subTitle:
        "Discover our latest women's releases in celebration of Women's History Month",
      imageComponent: () => (
        <Image
          loader={() =>
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
          }
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          layout="fill"
          objectFit="cover"
        />
      ),
    },
  ],
};
