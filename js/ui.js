// get document elements 
const shortcuts = document.querySelector('.shortcuts');

document.addEventListener('DOMContentLoaded', function() {
// nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
});
  // const source = document.querySelectorAll('.side-form');7
  // M.Sidenav.init(menus, {edge: 'left'});

// render shortcut data
if (localStorage.length > 0) {
  for (var i = 0; i < localStorage.length; i++) {
    let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
  
    let dict = encodeURIComponent(`{\"name\":\"${data.name}\",\"input\":\"${data.input}\"}`);
  
    const html = `
      <div class="card-panel shortcut white row" data-id="${data.name}">
              <img class="img" src="${data.icon}" alt="shortcut icon" />
        <a href="shortcuts://x-callback-url/run-shortcut?name=INTEGRITY&input=text&text=${dict}">
          <div class="shortcut-details">
            <div class="shortcut-name">${data.name}</div>
            <div class="shortcut-descriprion">${data.description}</div>
          </div>
        </a>
        <div class="shortcut-delete">
          <i class="material-icons" data-id="${data.name}">delete_outline</i>
        </div>
      </div>
  
    `;
    shortcuts.innerHTML += html;
  };
};

// remove shortcut
const removeShortcut = (id) => {
  const shortcut = document.querySelector(`.shortcut[data-id=${id}]`);
  shortcut.remove();
};

