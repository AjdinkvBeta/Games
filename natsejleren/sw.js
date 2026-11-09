// Natsejleren: keeps a copy of the game on the phone so it plays without internet.
// The voyage is saved only in the game's own storage on the phone.
const CACHE = 'natsejler-mw9lob0i';
const FILES = ["./","./assets/index-UZ2EcHJC.js","./icon-180.png","./icon-192.png","./icon-512.png","./index.html","./manifest.json","./models/bluewhale.glb","./models/boat_sail.glb","./models/buoy.glb","./models/delfin.glb","./models/fish_angler.glb","./models/fish_eel.glb","./models/fish_mackerel.glb","./models/fish_mutant.glb","./models/fish_purple.glb","./models/fish_smallfish.glb","./models/gull.glb","./models/havskildpadde.glb","./models/humpback.glb","./models/jelly_a.glb","./models/jelly_b.glb","./models/kraken.glb","./models/lamp.glb","./models/light_a.glb","./models/light_b.glb","./models/light_c.glb","./models/manta.glb","./models/mytehval.glb","./models/naturepack.glb","./models/pier.glb","./models/rocks.glb","./models/sailor.glb","./models/treepack.glb","./tex/cliff_diff.jpg","./tex/forest_diff.jpg","./tex/grass_diff.jpg","./tex/moss_diff.jpg","./tex/sand_diff.jpg"];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => {})))).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('./index.html', cp)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});
