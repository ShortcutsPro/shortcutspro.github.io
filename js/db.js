// get document elements
const form = document.querySelector('form');
const ADD = document.querySelector('button');


// add a shortcut
ADD.addEventListener('click', async () => {
  
  window.open('shortcuts://run-shortcut?name=INTEGRITY&input=text&text=Add%20Shortcut%20To%20App')
  .then(READ = await navigator.clipboard.readText());
  
  if (READ) {
    var NEW = JSON.parse(READ);
    console.log(ADD.name);

    if (NEW.name) {
      localStorage.setItem(NEW.name, READ);
      location.reload();
    };
  };
});


// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('remove clicked');
    localStorage.removeItem(id);
    location.reload();
});