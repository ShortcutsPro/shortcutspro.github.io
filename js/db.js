

// add new shortcut
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const shortcut = {
    name: form.name.value,
    input: form.input.value,
    icon: form.icon.value
  };

  db.collection('shortcuts').add(shortcut)
    .catch(err => console.log(err));

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