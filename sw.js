const C='perch-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{ if(e.request.url.includes('api.chess.com')||e.request.url.includes('fonts.g')) return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
