const CACHE_NAME = 'cache-v2';  
self.addEventListener('activate', (event) => {  
  event.waitUntil(
    caches.keys().then((keyList) =>  
      Promise.all(  
        keyList.map((key) => {  
          if (key !== CACHE_NAME) return caches.delete(key);  
        })  
      )  
    )  
  );  
});
