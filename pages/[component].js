import React from "react";
import { Button } from '../lib';

function page(props) {
	console.log(Button);
	//return <p>mmmm</p>;
	return <Button {...props} />;
}

export default page;

export async function getServerSideProps({ query }) {

	return { props: query };
}
