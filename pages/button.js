import { Button } from "../lib/Button";

function ButtonPage(props) {

	return <Button {...props} />;
}

export default ButtonPage;

export async function getServerSideProps({ query }) {

	return { props: query };
}
