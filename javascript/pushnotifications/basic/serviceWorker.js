var port;

self.addEventListener('install', function(event) {
  self.skipWaiting();
  //Installed
});

self.addEventListener('activate', function(event) {
  //Activated
});

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);  
  var obj = event.data.json();  
  fireNotification(obj, event);  
});

function fireNotification(obj, event) {
  var title = obj.title ;  
  var body = obj.message; 
  var icon = obj.icon;  
  var tag = 'push';
   
  event.waitUntil(self.registration.showNotification(title, {
    body: body,  
    icon: icon,  
    tag: tag  
  }));
}
