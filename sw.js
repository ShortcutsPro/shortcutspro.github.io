const staticCacheName = 'site-static-v5';
const dynamicCacheName = 'site-dynamic-v5';
const cacheLimit = 100;
const assets = [
  './index.html',
  './404.html',
  './js/app.js',
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
};

// install event
self.addEventListener('install', evt => {
  console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
  if ('registerProtocolHandler' in navigator != 'null') {
    navigator.registerProtocolHandler('web+cutz', './?s=pwa&input=%s', 'Bustl. Shortcuts')
    .then(reg => 
      console.log('sw ',reg))
    .catch(err => 
    console.log('error ',err))
  }
}

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          // check cached items size
          limitCacheSize(dynamicCacheName, cacheLimit);
          return fetchRes;
        })
      });
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('./pages/fallback.html');
      } 
    })
  );
});
console.log('sw.js');