if('serviceWorker' in navigator) {
  if('register()' in navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
  console.log('Did register service worker ')
  }
}