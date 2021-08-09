// Database functions

const ADD = document.querySelector('#button');

// add a shortcut
ADD.addEventListener('click', async () => {
    window.location = '../pages/papercuts.html';
});

// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    console.log('remove clicked');
    localStorage.removeItem(id);
    location.reload();
});