import React, { useState } from 'react';

import { CartSummary } from '/index.js';

export default {
  title: 'CartSummary',
  component: CartSummary,
  argTypes: {
    classNames: {},
    cartItems: {},
  },
};

const Template = (args) => <CartSummary {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cartItems: [
    {
      id: 'aaa',
      title: 'Product 1',
      variantTitle: 'Variant black',
      quantity: 2,
      originalPrice: '$99.99',
      imageUrl:
        'https://via.placeholder.com/150.png/1EA7FD/808080?text=product1',
      imageAlt: 'Image alt message',
    },
    {
      id: 'bbb',
      title: 'Product 2',
      variantTitle: 'Variant small',
      quantity: 1,
      originalPrice: '$50.99',
      promotionalPrice: '$25.99',
      imageUrl: 'https://via.placeholder.com/250.png?text=productSmall2',
      imageAlt: 'Image alt message',
    },
  ],
};

export const Editable = (args) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 'aaa',
      title: 'Product 1',
      variantTitle: 'Variant black',
      quantity: 2,
      originalPrice: '$99.99',
      imageUrl: 'https://via.placeholder.com/250.png?text=productSmall2',
      imageAlt: 'Image alt message',
    },
    {
      id: 'bbb',
      title: 'Product 2',
      variantTitle: 'Variant small',
      quantity: 1,
      originalPrice: '$50.99',
      promotionalPrice: '$25.99',
      imageUrl: 'https://via.placeholder.com/250.png?text=productSmall2',
      imageAlt: 'Image alt message',
    },
  ]);

  const onChange = (id, quantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const onRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  return (
    <CartSummary
      {...args}
      cartItems={cartItems}
      emptyCartMessage="Cart is Empty"
      onChange={onChange}
      onRemove={onRemove}
    />
  );
};

Editable.args = {
  isReadOnly: false,
  quantityLabel: 'Quantity',
};
