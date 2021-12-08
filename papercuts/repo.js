let db = {};
let sources = [];
let arch = (navigator.userAgent.match(/iP.+? OS ([\d_]+)/) || [
  "",
  ""
])[1].split("_")[0];
arch = arch ? "iOS" + arch : "iOS99999999999999999999";

db.repos = [];
db.packages = [];
async function load(repo, dryrun) {
  let meta = await (await fetch(repo + "/meta.json")).json();
  if (meta.id && meta.name) {
    let dbrepo = {};
    dbrepo.url = repo;
    dbrepo.id = meta.id + "";
    dbrepo.name = meta.name + "";
    dbrepo.version = "1.0"; //TODO: is this needed?
    dbrepo.description = meta.description + "" || "";
    dbrepo.icon = meta.icon + "" || "https://Cutz.Bustl.io/images/shortcut.png";
    if (!dryrun) {
      db.repos.push(dbrepo);
      let packages = await (await fetch(repo + "/packages.json")).json();
      for (let pakage of packages) {
        let dbpackage = {};
        dbpackage.id = pakage.id + "";
        dbpackage.auuid = pakage.auuid + "";
        dbpackage.icon = pakage.icon + "" || "https://Cutz.Bustl.io/images/shortcut.png";
        dbpackage.version = pakage.version + "";
        dbpackage.name = pakage.name + "";
        dbpackage.link = pakage.link + "";
        dbpackage.arch = pakage.arch + "" || "ios15";
        dbpackage.author = pakage.author || {
          name: "No Contact",
          link: ["about:blank"]
        };
        dbpackage.compatible =
          dbpackage.arch == "universal" || +dbpackage.arch.slice(3)<=+arch.slice(3);
        dbpackage.maintainer = pakage.maintainer || dbpackage.author;
        dbpackage.description = pakage.description + "" || "";
        dbpackage.depends = pakage.depends || [];
        dbpackage.category = pakage.category || [];
        dbpackage.depiction = pakage.depiction + "" || false;
        dbpackage.repo = pakage.repo || false;
        // dbpackage.callback = pakage.callback + "" || "";
        dbpackage.integrity = pakage.integrity || false;
        dbpackage.input = pakage.input + "" || "";
        dbpackage.color = pakage.color + "" || "#000000";

        if (!dbpackage.depiction) {
          dbpackage.depiction =
            "https://Cutz.Bustl.io/papercuts/fallback-depiction.html#" +
            encodeURIComponent(JSON.stringify(dbpackage));
        }

        if (dbpackage.callback == "") {

          let dict = {
                'name': `${dbpackage.name}`,
                'input': `${dbpackage.input}`
          };
          let payload = JSON.stringify(dict)
          
          if (dbpackage.integrity) {
            dpackage.callback = 'shortcuts://x-callback-url/run-shortcut?name=INTEGRITY&input=text&text='+payload;
          } //           if (dbpackage.integrity)
  
          if (!dbpackage.integrity) {
            if (dbpackage.input == "") {
            dpackage.callback = 'shortcuts://x-callback-url/run-shortcut?name='+encodeURIComponent(dict.name)
            } else if (dbpackage.input == "clipboard") {
            dpackage.callback = 'shortcuts://x-callback-url/run-shortcut?name='+encodeURIComponent(dict.name)+'&input=clipboard'
            } else {
            dpackage.callback = 'shortcuts://x-callback-url/run-shortcut?name='+encodeURIComponent(dict.name)+'&input=text&text='+encodeURIComponent(dict.input);
            } 
          } //           if (!dbpackage.integrity)

        } //         if (!dbpackage.callback)
        db.packages.push(dbpackage)
      }
    }
  } else throw new Error("Invalid repo!")
}
export function getDb() {
  return db
}
export function getPackage(id) {
  return db.packages
    .filter(e => e.id == id && e.compatible)
    .sort((a, b) => cmp(a.version, b.version))[0]
}
// Embed-a-Engine 1.0
function cmp(a, b) {
  let pa = a.split(".");
  let pb = b.split(".");
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    let na = Number(pa[i]);
    let nb = Number(pb[i]);
    if (isNaN(na)) na = 0;
    if (isNaN(nb)) nb = 0;
    if (na > nb) return -1
    if (nb > na) return 1
  }
  return 0
}
export function resolveDeps(pkg,deps,urls) {
  deps = deps || new Set();
  urls = urls || new Set();
  let db = JSON.parse(localStorage.getItem("bustl")) || {};
  let packages = db.packages || [];
  let installed = packages.some((e) => {
    return e.id == pkg.id
  });
  
  if (!installed) {
    deps.add(pkg.id)
    urls.add(pkg.link)
    packages.push(pkg)
    db.packages = packages;
    localStorage.setItem("bustl", JSON.stringify(db))
    
    for (let dep of pkg.depends) {
      if(deps.has(dep)) continue
      let depp=getPackage(dep)
      resolveDeps(depp,deps,urls)
    }
    return [...urls]
  }
}

export async function addSource(url) {
  try {
    await load(url, true)
    sources.push(url)
    localStorage.setItem("sources", JSON.stringify(sources))
    await init()
  } catch (e) {
    throw new Error("Invalid Source!")
  }
  await init()
}

export async function removeSource(url) {
  sources = sources.filter(e => e != url);
  localStorage.setItem("sources", JSON.stringify(sources))
  await init()
}

export async function removePackage(id) {
  let db = JSON.parse(localStorage.getItem("bustl")) || {};
  let p = db.packages || [];
  let packages = p.filter(e => e.id != id);
  db.packages = packages;
  localStorage.setItem("bustl", JSON.stringify(db))
  await init()
}

export async function init() {
  db = {};
  sources = [];
  sources.push('https://Cutz.Bustl.io/library/')
  sources.push('https://Cutz.Bustl.io/featured/')
  db.repos = [];
  db.packages = [];
  sources = JSON.parse(localStorage.getItem("sources")) || sources;
  await Promise.all(sources.map(e => load(e)))
}