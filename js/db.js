// add new shortcut
const form = document.querySelector('form');
const ADD = document.querySelector('button');
ADD.addEventListener('click', async () => {

  const READ = await navigator.clipboard.readText();
  const ADD = JSON.parse(READ);
  console.log(ADD.name);
  
  if (ADD.name) {
    localStorage.setItem(ADD.name, READ);
  };
  
  location.reload();
});


// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('clicked');
    localStorage.removeItem(id);
    location.reload();
});