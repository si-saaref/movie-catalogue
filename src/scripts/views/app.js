// ! This class will invoke app shell component

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
}

export default App;
