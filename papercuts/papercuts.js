import * as client from "./repo.js";
import * as bplist from "./bplist.js";
window.bplist=bplist;

window.onerror = error;

async function error(e) {
  await alert("Error", e)
}

const wait = ms => new Promise(c => setTimeout(c, ms));

async function alert(h,m) {
  const alert = document.createElement("ion-alert");
  alert.header = h;
  alert.message = m;
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  alert.present();
  await alert.onDidDismiss();
  alert.remove();
}

async function addSource() {
  const alert = document.createElement("ion-alert");
  alert.header = "Add Source";
  alert.inputs = [
    {
      name: "url",
      value: "",
      type: "url",
      placeholder: "Enter a Source URL"
    }
  ];
  alert.buttons = [
    {
      text: "Cancel",
      role: "cancel",
      cssClass: "secondary"
    },
    {
      text: "Add",
      handler: async e => {
        try {
          await client.addSource(e.url);
          await refreshSources();
        } catch (e) {
          error("The URL you entered wasn't a valid source");
        }
      }
    }
  ];
  document.body.appendChild(alert);
  alert.present();
  await alert.onDidDismiss();
  alert.remove();
}

function createSourceListItem(repo) {
  let iis = document.createElement("ion-item-sliding");
  let ii = document.createElement("ion-item");
  ii.mode = "ios";
  ii.inset = true;
  ii.lines = "inset";
  ii.style = "--border-width: 1px; --border-radius: 9px; --inner-padding-start: 20px; --inner-box-shadow: 0 0 5px; margin: 7px"
  let ia = document.createElement("ion-avatar");
  ia.slot = "start";
  let iai = document.createElement("img");
  iai.src = repo.icon;
  ia.appendChild(iai);
  ii.appendChild(ia);
  let il = document.createElement("ion-label");
  let ilh = document.createElement("h2");
  ilh.textContent = repo.name;
  il.appendChild(ilh);
  let ilp = document.createElement("p");
  ilp.textContent = repo.description;
  il.appendChild(ilp);
  ii.appendChild(il);
  iis.appendChild(ii);
  let iios = document.createElement("ion-item-options");
  iios.side = "start";
  iis.appendChild(iios);
  let iio = document.createElement("ion-item-option");
  iio.color = "danger";
  iio.textContent = "Remove";
  iio.addEventListener("click", () => {
    client.removeSource(repo.url)
    client.removePackage(repo.id)
    refreshSources()
  });
  iios.appendChild(iio);
  return iis;
}

function createBustlListItem(pkg) {
  let iis = document.createElement("ion-item-sliding");
  let ii = document.createElement("ion-item");
  ii.addEventListener("click", () => {
    window.open(pkg.callback);
  });
  ii.mode = "ios";
  ii.inset = true;
  ii.lines = "none";
  ii.style = "--border-width: 3px; --border-radius: 9px; --background:" + pkg.color +"; --color: white; margin: 7px;";
  let ia = document.createElement("ion-avatar");
  ia.slot = "start";
  let iai = document.createElement("img");
  iai.src = pkg.icon;
  ia.appendChild(iai);
  ii.appendChild(ia);
  let il = document.createElement("ion-label");
  let ilh = document.createElement("h2");
  ilh.textContent = pkg.name;
  il.appendChild(ilh);
  // let ilp = document.createElement("h2");
  // ilp.textContent = `${pkg.description}`;
  // il.appendChild(ilp);
  ii.appendChild(il);
  iis.appendChild(ii);
  let iios = document.createElement("ion-item-options");
  iios.side = "start";
  iis.appendChild(iios);
  let iio = document.createElement("ion-item-option");
  iio.color = "danger";
  iio.textContent = "Remove";
  iio.addEventListener("click", () => {
    client.removePackage(pkg.id);
    refreshSources();
  });
  iios.appendChild(iio);
  return iis;
}

function createPackageListItem(pkg) {
  let ii = document.createElement("ion-item");
  ii.addEventListener("click", () => {
     depict(pkg);
  });
  ii.mode = "ios";
  ii.inset = true;
  ii.lines = "none";
  if (pkg.repo) {
    ii.style = "--border-width: 1px; --border-radius: 9px; --inner-padding-start: 20px; --inner-box-shadow: 0 0 5px;"
  } else {
    ii.style = "--border-width: 3px; --border-radius: 9px; --background:" + pkg.color +"; --color: white; margin: 7px;";
  }
  let ia = document.createElement("ion-avatar");
  ia.slot = "start";
  let iai = document.createElement("ion-img");
  iai.src = pkg.icon;
  ia.appendChild(iai);
  ii.appendChild(ia);
  let il = document.createElement("ion-label");
  il.class = "ion-text-wrap";
  let ilh = document.createElement("h2");
  ilh.textContent = pkg.name;
  il.appendChild(ilh);
  let ilt = document.createElement("p");
  ilt.class = "ion-text-wrap";
  ilt.textContent = pkg.description;
  il.appendChild(ilt)
  ii.appendChild(il);
  return ii;
}

document.querySelector("#addSource").addEventListener("click", () => {
  addSource();
});
document.querySelector("#refresh").addEventListener("click", () => {
  refreshSources();
});
document.querySelector("#help").addEventListener("click", () => {
  window.open("https://www.bustl.io/book-online");
});
window.client = client;

const sourceList = document.querySelector("#sourceList");
const packageList = document.querySelector("#packageList");
const bustlList = document.querySelector("#bustlList");


let filters = {
  onlyCompatible: true
};

function loadBustlList() {
  bustlList.innerHTML = "";
  if (localStorage.length > 0) {
    let bustl = localStorage.getItem("bustl");
    if (bustl.length > 0) {
      let db = JSON.parse(bustl);
      let p = db.packages;
      p = p.filter(e => !e.repo);
      p = p.filter(e => e.integrity);
      p.forEach(e => {
       // console.log(e.name)
        bustlList.appendChild(createBustlListItem(e))
      })
    }
  }
}

function loadPackageList() {
  packageList.innerHTML = "";
  let p = client.getDb().packages;
  if (filters.onlyCompatible) p = p.filter(e => e.compatible);
  
  p.forEach(e => {
      packageList.appendChild(createPackageListItem(e));
  })
}

async function refreshSources() {
  const loading = document.createElement("ion-loading");
  loading.message = "Loading sources...";
  document.body.appendChild(loading);
  await Promise.all([
    loading.present(),
    (async () => {
      await client.init();
      sourceList.innerHTML = "";
      client.getDb().repos.forEach(e => {
        sourceList.appendChild(createSourceListItem(e));
      });
      loadBustlList();
      loadPackageList();
    })(),
    wait(1000)
  ]);
  await loading.dismiss();
  loading.remove();
}

customElements.define(
  "depiction-page",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<ion-header>
  <ion-toolbar>
    <ion-title></ion-title>
    <ion-buttons slot="primary">
      <ion-button shape="round" fill="solid" class="get"> &nbsp;&nbsp;GET&nbsp;&nbsp; </ion-button>
      <ion-button class="close">
        <ion-icon slot="icon-only" name="close"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<div style="-webkit-overflow-scrolling:touch; flex-grow:1;overflow:auto;border:0;margin:0;padding:0;display:flex;"><iframe style="flex-grow:1;overflow:auto;border:0;margin:0;" scrolling="yes" frameborder="0"></iframe></div>
`;
      const modalElement = document.querySelector("ion-modal");
      const pkg = modalElement.componentProps;
      this.querySelector("iframe").src = pkg.depiction;
      this.querySelector(".close").addEventListener("click", e =>
        modalElement.dismiss()
      );
      this.querySelector(".get").addEventListener("click", e => {
        modalElement.dismiss();
        installUi(pkg);
      });
      this.querySelector("ion-title").textContent = pkg.name;
    }
  }
);

async function installStep(link, i, l) {
  let installed;
  const alert = document.createElement("ion-alert");
  alert.header = "Installing...";
  alert.message = `Shortcut ${i + 1} of ${l}`;
  alert.buttons = [
    {
      text: "Cancel",
      role: "cancel",
      cssClass: "secondary"
    },
    {
      text: "Install",
      cssClass: "link"
    }
  ];
  document.body.appendChild(alert)
  await alert.present()
  let a = document.createElement("a");
  let b = alert.querySelector(
    ".link"
  );
  a.className = b.className;
  a.href = link;
  a.target = "_blank";
  a.innerHTML = b.innerHTML;
  a.style.textDecoration = "none";
  a.onclick=()=>{
    installed=true;
    alert.dismiss()
  }
  b.replaceWith(a)
  await alert.onDidDismiss()
  alert.remove()
  return !!installed
}

async function installUi(pkg) {
  const loading = document.createElement("ion-loading");
  loading.message = "Finding dependencies...";
  document.body.appendChild(loading)
  await loading.present()
  let toInstall = client.resolveDeps(pkg);
  await wait(500);
  await loading.dismiss()
  loading.remove()
  let canceled;
  for (let i in toInstall) {
    let u = toInstall[i];
    if (!(await installStep(u, i * 1, toInstall.length))){
      canceled=true
      break
    }
  }
  if(!canceled) {
    alert("Success!",`${pkg.name} and ${toInstall.length-1} dependenc${(toInstall.length-1==1)?"y was":"ies were"} installed successfully.`)
  await client.init()
      // let db = JSON.parse(localStorage.getItem("bustl")) || {};
      // let packages = db.packages || [];
      
      // packages.push(pkg)
      // db.packages = packages;
      // localStorage.setItem("bustl", JSON.stringify(db))
  }
}

async function depict(pkg) {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement("ion-modal");
  modalElement.component = "depiction-page";
  
  modalElement.componentProps = pkg;

  // present the modal
  document.body.appendChild(modalElement)
  modalElement.present()
  await modalElement.onDidDismiss()
  modalElement.remove()
}
// localStorage.clear();
refreshSources()
