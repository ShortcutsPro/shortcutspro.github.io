// get document elements
// const form = document.querySelector('form');
const ADD = document.querySelector('#button');
const query = new URL (window.location.href);
const INPUT = decodeURIComponent(query.searchParams.get('add'));

if (INPUT === 'null') {
    console.log(INPUT);
} else {
    alert("Adding "+INPUT);
};
// add a shortcut
ADD.addEventListener('click', async () => {
  
  if (INPUT === 'null') {
    window.open('shortcuts://x-callback-url/run-shortcut?name=Add%20Shortcut&x-error=shortcuts://');
  } else {
    var READ = navigator.clipboard.readText();
    const ADD = JSON.parse(READ);
    console.log(ADD.name);
    
    if (ADD.integrity) {
      localStorage.setItem(ADD.name, READ);
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