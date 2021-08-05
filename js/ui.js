// get document elements 

document.addEventListener('DOMContentLoaded', function() {
// nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
});

const shortcuts = document.querySelector('.shortcuts');

// render shortcut data
if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let data = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (data.integrity) {
      let dict;
      if (data.input.length) {
        dict = encodeURIComponent(`{\"name\":\"${data.name}\",\"input\":\"${data.input}\"}`);
      } else {
        dict = encodeURIComponent(`{\"name\":\"${data.name}\"}`);
      };

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
};

// remove shortcut
const removeShortcut = (id) => {
  const shortcut = document.querySelector(`.shortcut[data-id=${id}]`);
  shortcut.remove();
};

