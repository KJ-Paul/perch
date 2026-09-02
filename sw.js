const C='perch-v2';
self.addEventListener('install',e=>{ self.skipWaiting(); e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg']))); });
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const u=e.request.url; if(u.includes('api.chess.com')||u.includes('fonts.g')) return;
  // network first, fall back to cache when offline
  e.respondWith(fetch(e.request).then(r=>{ const copy=r.clone(); caches.open(C).then(c=>c.put(e.request,copy)); return r; }).catch(()=>caches.match(e.request)));
});
