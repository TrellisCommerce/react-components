import React, { useState } from 'react';

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
  Badge: (
    <span
      className={
        'absolute px-2 py-1 text-base font-bold text-white uppercase bg-gray-400 top-2 left-2'
      }
    >
      best seller
    </span>
  ),
  isBestSeller: true,
  bestSellerText: 'best seller',
  classNames: {
    mainImageWrapper:
      'w-[270px] h-[234px] md:w-[714px] md:h-[551px] lg:w-[678px] lg:h-[589px]',
  },
  navigateOnHover: true,
  magnifyOnHover: false,
  images: [
    {
      imageUrl:
        'https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3264fd35d6074bd6a3b0ad7300d91069_9366/Tenis_Zig_Kinetica_II_Los_Picapiedra_Verde_GX3975_01_standard.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/h_840,f_auto,q_auto/53a569c611394060b429ad590113099b_9366/Tenis_Zig_Kinetica_II_Los_Supersonicos_Blanco_GW3853.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad6e06ede832451c9b78ad7300fa8636_9366/tenis-nanoflex-tr.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/397470b7aa7a4937855cad480104f2d7_9366/tenis-reebok-resonator-low-los-picapiedra.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/00134380c1c64b6d96e6ad11008f8bbe_9366/tenis-reebok-lite-3.jpg',
      alt: '',
      isPrimary: false,
    },
  ],
};

export const WithCustomImages = (args) => {
  const [mainImageSrc, setMainImageSrc] = useState('');

  const onMainImageChange = (currentMainImageSrc) => {
    setMainImageSrc(currentMainImageSrc);
  };

  return (
    <ImageGallery
      {...args}
      onMainImageChange={onMainImageChange}
      MainImageComponent={() => (
        <img
          src={mainImageSrc}
          key={mainImageSrc}
          draggable={false}
          alt=""
          className="object-cover w-full h-full animate-fade"
        />
      )}
    />
  );
};
WithCustomImages.args = {
  reelPosition: 'bottom',
  isBestSeller: false,
  classNames: {
    mainImageWrapper:
      'w-[270px] h-[234px] md:w-[714px] md:h-[551px] lg:w-[678px] lg:h-[589px]',
  },
  navigateOnHover: false,
  magnifyOnHover: false,
  images: [
    {
      imageUrl:
        'https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3264fd35d6074bd6a3b0ad7300d91069_9366/Tenis_Zig_Kinetica_II_Los_Picapiedra_Verde_GX3975_01_standard.jpg',
      alt: '',
      //Example for custom Image in the thumbnails reel
      Image: () => (
        <img
          src="https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3264fd35d6074bd6a3b0ad7300d91069_9366/Tenis_Zig_Kinetica_II_Los_Picapiedra_Verde_GX3975_01_standard.jpg"
          alt=""
        />
      ),
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/h_840,f_auto,q_auto/53a569c611394060b429ad590113099b_9366/Tenis_Zig_Kinetica_II_Los_Supersonicos_Blanco_GW3853.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad6e06ede832451c9b78ad7300fa8636_9366/tenis-nanoflex-tr.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/397470b7aa7a4937855cad480104f2d7_9366/tenis-reebok-resonator-low-los-picapiedra.jpg',
      alt: '',
      isPrimary: false,
    },
    {
      imageUrl:
        'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/00134380c1c64b6d96e6ad11008f8bbe_9366/tenis-reebok-lite-3.jpg',
      alt: '',
      isPrimary: false,
    },
  ],
};
