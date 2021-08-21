
const wait = ms => new Promise(c => setTimeout(c, ms));

document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
});

let start = window.sessionStorage.getItem("start") || false;
if (!start) {
  wait(1000);
  window.sessionStorage.setItem("start", true);
  location.reload();
};