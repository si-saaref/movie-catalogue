import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
	if (!('serviceWorker' in navigator)) {
		console.log('Service Worker not supported in the browser');
		return;
	}

	// Todo => without workbox
	// try {
	// 	await navigator.serviceWorker.register('./sw.bundle.js');
	// 	console.log('Service worker registered');
	// } catch (error) {
	// 	console.log('Failed to register service worker', error);
	// }

	// Todo => with workbox
	const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
	try {
		await wb.register();
		console.log('Service worker registered');
	} catch (error) {
		console.log('Failed to register service worker', error);
	}
};

export default swRegister;
