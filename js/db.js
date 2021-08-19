// Database functions
import getDb as client from '../papercuts/repo.js';

let packages = []
  
(async () => {

  try {
    await client.init()
    packages = client.getDb().packages;
  } catch (e) {
  } 
console.log(packages);
})();

  




// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('remove clicked');
    localStorage.removeItem(id);
    location.reload();
});