const CACHE_NAME = 'umiora-v1';
const ASSETS = [
    'index.html',
    'style.css',
    'script.js',
    'manifest.json'
];

// Uygulama yüklenirken temel dosyaları hafızaya (cache) al
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Çevrimdışı (offline) çalışabilme motoru
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});