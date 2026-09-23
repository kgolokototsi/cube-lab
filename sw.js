/* Cube Lab service worker - precache everything, then serve from cache first. */
var CACHE = "cubelab-20260923-1531";
var ASSETS = ["./","./index.html","./manifest.webmanifest",
              "./icon-180.png","./icon-192.png","./icon-512.png","./icon-512-maskable.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); })
    .then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  e.respondWith(caches.match(req).then(function(hit){
    if(hit) return hit;
    return fetch(req).then(function(res){
      try {
        if(res && res.ok && new URL(req.url).origin === self.location.origin){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
      } catch(err){}
      return res;
    }).catch(function(){
      if(req.mode === "navigate") return caches.match("./index.html");
      return new Response("", { status:504, statusText:"offline" });
    });
  }));
});
