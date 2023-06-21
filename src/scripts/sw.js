import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
	'./',
	'./icons/maskable_icon.png',
	'./icons/maskable_icon_x48.png',
	'./icons/maskable_icon_x72.png',
	'./icons/maskable_icon_x96.png',
	'./icons/maskable_icon_x128.png',
	'./icons/maskable_icon_x192.png',
	'./icons/maskable_icon_x384.png',
	'./icons/maskable_icon_x512.png',
	'./index.html',
	'./favicon.png',
	'./app.bundle.js',
	'./app.webmanifest',
	'./sw.bundle.js',
];

// ! Siklus Pertama
self.addEventListener('install', (event) => {
	// ? self.skipWaiting() //! optional in dev mode
	console.log('Installing Service Worker ...');

	// TODO: Caching App Shell Resource
	event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

// ! Siklus Kedua
self.addEventListener('activate', (event) => {
	console.log('Activating Service Worker ...');

	// TODO: Delete old caches
	event.waitUntil(CacheHelper.deleteOldCache());
});

// ! Siklus ketiga (banyak macamnya)
self.addEventListener('fetch', (event) => {
	console.log(event.request);

	// event.respondWith(fetch(event.request));
	// TODO: Add/get fetch request to/from caches
	event.respondWith(CacheHelper.revalidateCache(event.request));
});

/* 
! Siklus hidup terbagi menjadi 3 = Installation, Activation, Idle (fetch, push, sync)
! SW berajalan pada thread yang berbeda dengan browser sehingga tidak bisa berurusan langsung dengan browser

*/
