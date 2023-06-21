// TODO =====>>> MENAMBAH CACHE <<<======
// ! ADA 3 cara menambahkan data ke cache
const asstes = ['/data.json', '/value.json'];
const cacheName = 'my-cache';

// ! 1) Add -> bisa juga menggunkana async await instead of promise chaing
// ? Penambahan  Cache menggunakan add degnan metodo request argument
caches.open(cacheName).then((cacheItem) => cacheItem.add(new Request(asstes[0])));
// ? Penambahan  Cache menggunakan add degnan metodo URL argument
caches.open(cacheName).then((cacheItem) => cacheItem.add(asstes[0]));

// ! 2) AddAll
// ? Penambahan  Cache menggunakan add degnan metodo request argument
caches.open(cacheName).then((cacheItem) => cacheItem.addAll(new Request(asstes)));
// ? Penambahan  Cache menggunakan add degnan metodo URL argument
caches.open(cacheName).then((cacheItem) => cacheItem.addAll(asstes));

// ! 3) PUT MMETHOD

// TODO =====>>> MEGAMBBIL CACHE <<<======
const options = {
	ignoreSearch: true,
	ignoreMethod: true,
	ignoreVary: true,
};

cache.match(request, options).then((response) => {
	// do something with response
});

// TODO =====>>> MENCARI CACHE <<<======
caches.keys().then((cacheNames) => {
	cacheNames.forEach((cacheName) => {
		if (cacheName !== 'my-cache') {
			// TODO =====>>> MENGHAPUS CACHE <<<======
			caches.delete(cacheName);
		}
	});
});

// TODO =====>>> CACHEING STRATEGY <<<<======\
// ! 1) Cache First
self.addEventListener('fetch', function (evt) {
	evt.respondWith(
		caches.match(evt.request).then((resp) => {
			return resp ?? fetch(evt.request);
		})
	);
});

// ! 2) Network First
self.addEventListener('fetch', (event) => {
	event.respondWith(
		fetch(event.request).catch(() => {
			return caches.match(event.request);
		})
	);
});

// ! 3) Cache while revalidate and update data netword
self.addEventListener('fetch', (event) => {
	event.respondWith(revalidateCache(event.request));
});

const revalidateCache = async (request) => {
	const response = await caches.match(request);

	if (response) {
		_fetchRequest(request);
		return response;
	}

	return _fetchRequest(request);
};

const _fetchRequest = async (request) => {
	const response = await fetch(request);

	if (!response || response.status !== 200) {
		return response;
	}

	_addToCache(request);
	return response;
};

const _addToCache = async (request) => {
	const cache = await caches.open(cacheName);
	cache.add(request);
};
