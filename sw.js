//////////////////////////////////////////
// 
//.         Service Worker
//
const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const cacheLimit = 100;
const assets = [
  './index.html',
  './main.js',
  './404.html',
  './css/styles.css',
  './css/clean.css',
  './fonts/space_age.ttf',
  './pages/fallback.html',
  './papercuts/bplist.js',
  './papercuts/fallback-depiction.html',
  ',/papercuts/papercuts.js',
  './papercuts/repo.js',
  './papercuts/style.css'
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
}

// install event
self.addEventListener('install', e => {
  console.log('service worker installed');
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    });
  )
});


// if ('registerProtocolHandler' in navigator) {
//     navigator.registerProtocolHandler('web+cutz', './?s=pwa&input=%s', 'Bustl. Shortcuts')
//       console.log('web+cutz registered')
// }

// activate event
self.addEventListener('activate', e => {
  console.log('service worker activated');
  e.waitUntil(
    caches.keys().then(keys => {
      console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key));
      );
    });
  );
});


// fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open(dynamicCacheName).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch((e) => {
      if(e.request.url.indexOf('.html') > -1){
        return caches.match('./pages/fallback.html');
      } 
    });
  );
});

console.log('sw.js');