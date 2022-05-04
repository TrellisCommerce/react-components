import React from 'react';

import { ImageGallery } from '../lib';

export default {
  title: 'ImageGallery',
  component: ImageGallery,
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ImageGallery {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  reelPosition: 'bottom',
  isBestSeller: true,
  classNames: {},
  navigateOnHover: true,
  magnifyOnHover: false,
  images: [
    {
      imageUrl:
        'https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3264fd35d6074bd6a3b0ad7300d91069_9366/Tenis_Zig_Kinetica_II_Los_Picapiedra_Verde_GX3975_01_standard.jpg',
      alt: '',
      CustomImage: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/h_840,f_auto,q_auto/53a569c611394060b429ad590113099b_9366/Tenis_Zig_Kinetica_II_Los_Supersonicos_Blanco_GW3853.jpg',
      alt: '',
      CustomImage: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad6e06ede832451c9b78ad7300fa8636_9366/tenis-nanoflex-tr.jpg',
      alt: '',
      CustomImage: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/397470b7aa7a4937855cad480104f2d7_9366/tenis-reebok-resonator-low-los-picapiedra.jpg',
      alt: '',
      CustomImage: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/00134380c1c64b6d96e6ad11008f8bbe_9366/tenis-reebok-lite-3.jpg',
      alt: '',
      CustomImage: '',
      isPrimary: false,
    },
  ],
};
