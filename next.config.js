module.exports = {
	rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/api/home",
      }
    ]
}
};
