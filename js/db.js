// get document elements
// const form = document.querySelector('form');
const ADD = document.querySelector('#button');

// add a shortcut
ADD.addEventListener('click', async () => {
  
  // if (INPUT === 'null') {
    window.open('shortcuts://x-callback-url/run-shortcut?name=Add%20Bustl.Cutz&x-error=https://shortcutspro.github.io/error.html?uri%3Dshortcuts://shortcuts/c0aa214ac24b4095979344f170f56eae%26name%3DAdd%2520Bustl.Cutz');
    window.close();
  // } else {
  //   var READ = navigator.clipboard.readText();
  //   const ADD = JSON.parse(READ);
  //   console.log(ADD.name);
    
  //   if (ADD.integrity) {
  //     localStorage.setItem(ADD.name, READ);
  //     location.reload();
  //   };
  // };
});






// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('remove clicked');
    localStorage.removeItem(id);
    location.reload();
});