// ! Siklus Pertama
self.addEventListener('install', (event) => {
	// ? self.skipWaiting() //! optional in dev mode
	console.log('Installing Service Worker ...');

	// TODO: Caching App Shell Resource
});

// ! Siklus Kedua
self.addEventListener('activate', (event) => {
	console.log('Activating Service Worker ...');

	// TODO: Delete old caches
});

// ! Siklus ketiga (banyak macamnya)
self.addEventListener('fetch', (event) => {
	console.log(event.request);

	event.respondWith(fetch(event.request));
	// TODO: Add/get fetch request to/from caches
});

/* 
! Siklus hidup terbagi menjadi 3 = Installation, Activation, Idle (fetch, push, sync)
! SW berajalan pada thread yang berbeda dengan browser sehingga tidak bisa berurusan langsung dengan browser

*/
