this.addEventListener('install', function(event) {

    var urlsToCache = [
        '/index.html',
        '/style.css',
        '/app.js'
    ];

    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(caches.match(event.request).catch(function() {
        return fetch(event.request);
    }).then(function(r) {
        response = r;
        caches.open('v1').then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    }).catch(function() {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
    }));
});