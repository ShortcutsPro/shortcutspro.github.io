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

  let shortcut = encodeURIComponent(`${data.name}`);
  let input = encodeURIComponent(`${data.input}`);
  let dict = encodeURIComponent(`{\"name\":\"${shortcut}\",\"input\":\"${input}\"}`);
  console.log(shortcut)
  console.log(input)
  console.log(dict)
  
  const html = `
    <div class="card-panel shortcut white row" data-id="${id}">
    <a href="shortcuts://run-shortcut?name=INTEGRITY&input=text&text=${dict}">
      <img src="/images/shortcut.png" alt="shortcut icon">
      <div class="shortcut-details">
        <div class="shortcut-title">${data.name}</div>
        <div class="shortcut-input">${data.input}</div></a>
      </div>
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