import React, { useCallback, useState, useEffect, useMemo } from "react";

const url = "http://localhost:3000";

function SSR({ Component, ...props }) {
	const [html, setHtml] = useState();

	const params = useMemo(() => {
		return new URLSearchParams(props).toString();
	}, [props]);

	const load = async () => {
		const fetchUrl = new URL(`${url}/button`);
		fetchUrl.search = params;

		const response = await fetch(fetchUrl);
		const result = await response.text();
		setHtml(result);
	};

	useEffect(() => {
		load();
	}, [params]);

	if (!html) {
		return <p>Loading...</p>;
	}

	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default SSR;
