const Detail = {
	async render() {
		return `
      <h2>Detail Page</h2>
    `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const movie = await TheMovieDbSource.detailMovie(url.id);
		console.log(movie);
	},
};

export default Detail;
