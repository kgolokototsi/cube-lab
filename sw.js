/* Cube Lab service worker - precache everything, then serve from cache first. */
var CACHE = "cubelab-20260923-1535";
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

  /* The page itself is network-first: cache-first meant an update only ever
     showed up on the NEXT open, which looks like the app never updating.
     Offline still works - it falls back to the cached copy. */
  var wantsPage = req.mode === "navigate" ||
                  (req.headers.get("accept") || "").indexOf("text/html") >= 0;
  if(wantsPage){
    e.respondWith(fetch(req).then(function(res){
      try {
        if(res && res.ok){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put("./index.html", copy); });
        }
      } catch(err){}
      return res;
    }).catch(function(){
      return caches.match("./index.html").then(function(hit){
        return hit || new Response("", { status:504, statusText:"offline" });
      });
    }));
    return;
  }

  /* icons, manifest: cache-first, they rarely change */
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
      return new Response("", { status:504, statusText:"offline" });
    });
  }));
});
