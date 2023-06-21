// ! This class will invoke app shell component

import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
	constructor({ button, drawer, content }) {
		//! Constructor hanya bertugas untuk menginisiasikan nilai properti
		this._button = button;
		this._drawer = drawer;
		this._content = content;
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
		});
		// kita bisa menginisiasikan komponen lain bila ada
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		this._content.innerHTML = await page.render();
		await page.afterRender();
	}
}

export default App;
