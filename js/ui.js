const shortcuts = document.querySelector('.shortcuts ');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add shortcut form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render shortcut data
const renderShortcut = (data, id) => {
  let dict = encodeURIComponent(`{\"name\":\"${data.name}\",\"input\":\"${data.input}\"}`);
  console.log(`${data.name}`)
  console.log(dict)
  
  const html = `
    <div class="card-panel shortcut white row" data-id="${id}">
      <a href="shortcuts://run-shortcut?name=INTEGRITY&input=text&text=${dict}">
        <img class="img" src="images/shortcut.png" alt="shortcut icon" />
        <div class="shortcut-details">
          <div class="shortcut-title">${data.name}</div>
          <div class="shortcut-input">${data.input}</div>
        </div>
      </a>
      <div class="shortcut-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>

  `;
  shortcuts.innerHTML += html;

};

// remove shortcut
const removeShortcut = (id) => {
  const shortcut = document.querySelector(`.shortcut[data-id=${id}]`);
  shortcut.remove();
};