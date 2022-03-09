import React from "react";

const defaultFetchStoryHtml = async (url, path, params, storyContext) => {
  const fetchUrl = new URL(`${url}/${path}`);
  fetchUrl.search = new URLSearchParams({ ...storyContext.globals, ...params }).toString();

  const response = await fetch(fetchUrl);
  return response.text();
};

function SSR({ Component, ...props }) {

	return <Component {...props} />;
}

export default SSR;
