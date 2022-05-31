# `@trelliscommerce/react-components`

`@trelliscommerce/react-components` is a React component library built by [Trellis](https://trellis.co).
We've built this library with a simple goal in mind: to enable developers to build great React e-commerce storefronts
easily and in record time.

The components can be used in any React project and are compatible with Server-Side Rendering (meaning they can be
used with Next.js and similar SSR/SSG frameworks).

Browse the components by navigating to them in the sidebar.
Explore the docs for each component on this site or on our GitHub repository.

## Getting started

Install the React component library using your preferred package manager:

```
npm install @trelliscommerce/react-components
```

or:

```
yarn add @trelliscommerce/react-components
```

Then, import components of your choice wherever you need them.
For example with the `Pricing` component:

```js
import React from 'react';
import { Pricing } from '@trelliscommerce/react-components';

const YourComponentOrPage = ({ price, ...yourProps }) => (
  <>
    {/* Render your own component tree, and use the library's components wherever you need */}
    <Pricing originalPrice={price} />
  </>
);

export default YourComponentOrPage;
```
