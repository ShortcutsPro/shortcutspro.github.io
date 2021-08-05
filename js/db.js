// get document elements
// const form = document.querySelector('form');
const ADD = document.querySelector('#button');


// add a shortcut
ADD.addEventListener('click', async () => {
  
  // navigator.clipboard.writeText("");
  window.open('shortcuts://x-callback-url/run-shortcut?name=Add%20Shortcut&x-error=shortcuts://');
});

const query = new URL (window.location.href);
const INPUT = decodeURIComponent(query.searchParams.get('add'));

  // var READ = await navigator.clipboard.readText();
if (INPUT === 'null') {
  console.log(INPUT);
} else {
  const ADD = JSON.parse(INPUT);
  console.log(ADD.name);

  if (ADD.integrity) {
    localStorage.setItem(ADD.name, INPUT);
    location.reload();
  };
};




// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('remove clicked');
    localStorage.removeItem(id);
    location.reload();
});