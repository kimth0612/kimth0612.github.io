var CACHE_NAME = "PointHub";
var CACHED_URLS = [
  "index.html",
  "home-page.css",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "IMGs/about.png",
  "IMGs/dhy.png",
  "IMGs/erp.png",
  "IMGs/farm.png",
  "IMGs/ksl.png",
  "IMGs/kth.png",
  "IMGs/logo30.png",
  "IMGs/pjj.jpg",
  "IMGs/tms-Software.png",
  "IMGs/yin.png",
  "Manifest.json",
  "PointHub.js",
  "uMain.html"
  ];

self.addEventListener('install', function(event) {
                event.waitUntil(
                                caches.open(CACHE_NAME).then(function(cache) {
                                return cache.addAll(CACHED_URLS);
                })
                                );
});


self.addEventListener('fetch',function(event) {
   event.respondWith(
     fetch(event.request).catch(function() {
                   return caches.match(event.request).then(function(response) {
       if (response) {
                                   return response;
       } else if (event.request.headers.get("accept").includes("text/html")) {
                                   return caches.match("index.html");
                   }
                   });
   })
                   );
});