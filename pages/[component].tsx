import React from 'react';
import * as components from '../lib';
import { AppProps } from 'next/app';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

function page(props: any) {
  const { component, ...args } = props;

  // @ts-ignore
  const Component = components[component];

  if (!Component) {
    return <p>Component not found, is it exported on `/lib/index.js` ?</p>;
  }
  return <Component {...args} />;
}

export default page;

export const getServerSideProps: ({
  query,
  params,
}: {
  query: any;
  params: any;
}) => { props: any } = ({ query, params }) => {
  const props = JSON.parse(query.args);
  return { props: { ...props, ...params } };
};
