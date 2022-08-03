import React, { useState, useEffect, useMemo } from 'react';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : `${window.location.origin}/`;

// @ts-ignore
function SSR({ component, ...props }) {
  const [html, setHtml] = useState();

  const params = useMemo(() => {
    return new URLSearchParams({ args: JSON.stringify(props) }).toString();
  }, [props]);

  const load = async () => {
    const fetchUrl = new URL(`${url}${component}`);
    fetchUrl.search = params;

    const response = await fetch(fetchUrl);
    const result = await response.text();
    // @ts-ignore
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
