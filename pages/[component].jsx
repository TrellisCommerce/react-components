import React from 'react';
import * as components from '../lib';

function page(props) {
  const { component, ...args } = props;

  const Component = components[component];

  if (!Component) {
    return <p>Component not found, is it exported on `/lib/index.js` ?</p>;
  }
  return <Component {...args} />;
}

export default page;

export async function getServerSideProps({ query, params }) {
  const props = JSON.parse(query.args);
  return { props: { ...props, ...params } };
}
