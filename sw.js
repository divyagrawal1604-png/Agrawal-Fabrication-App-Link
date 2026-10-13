// Offline support: keeps the app shell cached so Bill Book opens without internet.
const CACHE = "bill-book-dc8b240bc7";
const FILES = ["./", "index.html", "manifest.webmanifest", "vendor/jspdf.umd.min.js", "fonts/fonts.css", "fonts/arimo-latin-400-normal.woff2", "fonts/arimo-latin-700-normal.woff2", "fonts/ibm-plex-mono-latin-500-normal.woff2", "fonts/ibm-plex-mono-latin-600-normal.woff2", "fonts/public-sans-latin-400-normal.woff2", "fonts/public-sans-latin-500-normal.woff2", "fonts/public-sans-latin-600-normal.woff2", "fonts/public-sans-latin-700-normal.woff2", "fonts/tinos-latin-400-normal.woff2", "fonts/tinos-latin-700-normal.woff2", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    // Newest app when online, cached copy when offline.
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
