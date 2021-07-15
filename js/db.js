

// add new shortcut
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const shortcut = {
    name: form.name.value,
    input: form.input.value,
    icon: form.icon.value
  };
  
  console.log(shortcut.name);
  
  localStorage.setItem('key', 'value');
      
  
  form.name.value = '';
  form.input.value = '';
  form.icon.value = '';
});


// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('name');
    //console.log(id);
    localStorage.setItem(id, null);
  }
})