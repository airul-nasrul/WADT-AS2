const staticAS2 = "WADT-AS2";
const assets = [
  "/",
  "/index.html",
  "/aboutus.html",
  "/airul.html",
  "/baizura.html",
  "/blog.html",
  "/css/style.css",
  "/img/quote1.jpg",
  "/img/quote2.jpg",
  "/img/quote3.jpg",
  "/img/quote4.jpg",
  "/img/quote5.jpg",
  "/img/quote6.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAS2).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
