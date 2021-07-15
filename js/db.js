// add new shortcut
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const shortcut = {
    name: form.name.value,
    input: form.input.value,
    icon: form.icon.value
  };

  if (shortcut.name.length) {
      localStorage.setItem(form.name.value, JSON.stringify(shortcut));
  };

  form.name.value = '';
  form.input.value = '';
  form.icon.value = '';
  
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