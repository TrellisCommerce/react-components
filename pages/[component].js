import React from "react";
import * as components from '../lib';

function page(props) {
	const { component, ...args } = props

	const Component = components[component];

	return <Component {...args} />;
}

export default page;

export async function getServerSideProps({ query, params }) {
	const props = JSON.parse(query.args);
	return { props: { ...props, ...params } };
}
