// add new shortcut
const form = document.querySelector('form');
const ADD = document.querySelector('button');
ADD.addEventListener('click', async () => {

  const READ = await navigator.clipboard.readText();
  const ADD = JSON.parse(READ);
  console.log(ADD.name);
  
  const shortcut = {
    name: ADD.name,
    input: ADD.input,
    icon: ADD.icon
  };
  
  if (ADD.name) {
    localStorage.setItem(ADD.name, READ);
  };

  // form.name.value = '';
  // form.input.value = '';
  // form.icon.value = '';
  
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