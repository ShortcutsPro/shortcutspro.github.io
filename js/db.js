

// add new shortcut
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const shortcut = {
    name: form.name.value,
    input: form.input.value,
    icon: form.icon.value
  };
  
  const shortcutString = JSON.stringify(shortcut);
  if (localStorage.getItem(shortcut.name) === shortcutStrng) {
  };
  else {localStorage.setItem(shortcut.name, shortcutString)};

  form.name.value = '';
  form.input.value = '';
  form.icon.value = '';
});

// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('shortcuts').doc(id).delete();
  }
})