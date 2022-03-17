module.exports = {
	async redirects() {
    return [
      {
        source: '/',
        destination: '/storybook-static',
        permanent: true,
      },
    ]
  }
};
