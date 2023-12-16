var CACHE_NAME = "HomePage";
var CACHED_URLS = [
  "index.html",
  "home-page.css",
  "HomePage.js",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "Manifest.json",
  "uMain.html",
  "uMain.pnl_about_us_info.img_about_us.Picture.png",
  "uMain.pnl_svc_01.img_svc_01.Picture.png",
  "uMain.pnl_svc_02.img_svc_02.Picture.png",
  "uMain.pnl_svc_03.img_svc_03.Picture.png",
  "uMain.pnl_team_info.WebImageControl5.Picture.png",
  "uMain.pnl_team_info.WebImageControl6.Picture.png",
  "uMain.pnl_team_info.WebImageControl7.Picture.png",
  "uMain.pnl_team_info.WebImageControl8.Picture.png",
  "uMain.pnl_top_info.img_comp_logo.Picture.svg"
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