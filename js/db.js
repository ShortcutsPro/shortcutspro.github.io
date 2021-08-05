// get document elements
// const form = document.querySelector('form');
const ADD = document.querySelector('#button');


// add a shortcut
ADD.addEventListener('click', async () => {
  
  // navigator.clipboard.writeText("");
  window.open('shortcuts://x-callback-url/run-shortcut?name=Add%20Shortcut&x-error=shortcuts://');
});






// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('remove clicked');
    localStorage.removeItem(id);
    location.reload();
});