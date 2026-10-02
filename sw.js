const CACHE = '4cus-v2';
const ASSETS = [
  './index.html','./templates.html','./styles.css','./app.js','./data.js','./manifest.webmanifest',
  './assets/icon-192.png','./assets/icon-512.png','./assets/foki-main.png','./assets/foki-1.png','./assets/foki-2.png','./assets/foki-3.png'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
