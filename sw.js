const staticAS2 = "WADT-AS2";
const assets = [
  "/WADT-AS2/",
  "/WADT-AS2/index.html",
  "/WADT-AS2/aboutus.html",
  "/WADT-AS2/airul.html",
  "/WADT-AS2/baizura.html",
  "/WADT-AS2/blog.html",
  "/WADT-AS2/css/style.css",
  "/WADT-AS2/img/quote1.jpg",
  "/WADT-AS2/img/quote2.jpg",
  "/WADT-AS2/img/quote3.jpg",
  "/WADT-AS2/img/quote4.jpg",
  "/WADT-AS2/img/quote5.jpg",
  "/WADT-AS2/img/quote6.jpg"
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
