// 
// document.addEventListener('DOMContentLoaded', function() {
//   const menus = document.querySelectorAll('.side-menu');
//   M.Sidenav.init(menus, {edge: 'right'});
// });

const shortcuts = document.querySelector('#shortcuts');
shortcuts.innerHTML = "";
// render shortcut data
if (localStorage.length > 0) {
  let packages = localStorage.getItem('packages');
  if (packages) {

    packages.forEach(data => {
      shortcuts.appendChild(`
        <IonItem key={${data.id}}>
          <a src="${data.callback}">
            <IonThumbnail slot="start">
              <img src={${data.icon}} />
            </IonThumbnail>
            <IonLabel>
              <h2>{${data.name}}</h2>
              <p>{${data.description}}</p>
            </IonLabel>
          </a>
        </IonItem>
      `);
     });
  };
};

// remove shortcut
const removeShortcut = (id) => {
  const shortcut = document.querySelector(`.shortcut[data-id=${id}]`);
  shortcut.remove();
};

