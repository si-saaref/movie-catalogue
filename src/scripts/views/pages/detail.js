import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
	async render() {
		return `
      <div id="movie" class="movie"></div>
    `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const movie = await TheMovieDbSource.detailMovie(url.id);
		const movieContainer = document.querySelector('#movie');
		movieContainer.innerHTML = createMovieDetailTemplate(movie);
	},
};

export default Detail;
