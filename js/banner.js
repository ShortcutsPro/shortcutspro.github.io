const colorGradients = {
  "ff4351": "linear-gradient(#F36F74, #F2585E)",
  "fd6631": "linear-gradient(#FF8E73, #FF7C5C)",
  "fe9949": "linear-gradient(#F8AE5F, #F7A145)",
  "fec418": "linear-gradient(#E8CA45, #E5C238)",
  "ffd426": "linear-gradient(#53CD6B, #37C553)",
  "19bd03": "linear-gradient(#57CFB4, #2AC7A8)",
  "55dae1": "linear-gradient(#5ACCDE, #3FC4D9)",
  "1b9af7": "linear-gradient(#24BAF7, #00AFF6)",
  "3871de": "linear-gradient(#5874CA, #3D5EC2)",
  "7b72e9": "linear-gradient(#9164C7, #7F4BBE)",
  "db49d8": "linear-gradient(#C085E6, #B671E2)",
  "ed4694": "linear-gradient(#F694D8, #F583D2)",
  "000000": "linear-gradient(#9099A3, #7E8994)",
  "b4b2a9": "linear-gradient(#9DA79D, #8D998E)",
  "a9a9a9": "linear-gradient(#A49995, #968984)",
  "zzzzzz": "linear-gradient(#fff722, #ffb101)"
}
const SOURCE = decodeURIComponent(query.searchParams.get('s'));
if (SOURCE != "pwa" && SOURCE != "shortcuts") {
  if (!navigator.standalone && localStorage.getItem("_shortcutInstalled") != "1") {
      let siteName = document.title;
      let color = colorGradients['zzzzzz'];
      let url = "shortcuts://shortcuts/68073dadff654a1cad5f39df8f9d6c41";
      var t = document.createElement("div")
      t.setAttribute("style", "all: initial; box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif; background:"+color+"; width: 100%; position: fixed; top:0; left:0; display: flex; flex-direction: row;padding: 0 16px 0 10px; align-items: center; height: 64px; transform: translateY(-64px);")
      t.innerHTML = `
      <div style="text-align: center;">
        <a href="javascript:;" style="color: #aac8ed; text-decoration: none; padding: 5px; width: 10px; height: fit-content; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 4px;" onclick="localStorage.setItem('_shortcutInstalled','1'); document.querySelector(':root').style.transform=''; this.parentElement.parentElement.remove();">
          <svg style="width: 8px;" viewBox="0 0 22 24">
            <g xmlns="http://www.w3.org/2000/svg" style="fill: none; fill-opacity: 1; stroke: #b0c7ea; stroke-opacity: 1; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: miter; transform: translate(-50.5px, -87.6px);" id="g856">
              <path d="M 70.245452, 88.972644 51.96117, 110.01789"></path>
              <path d="M 51.96117, 88.972644 70.245452, 110.01789"></path>
            </g>
          </svg>
        </a>
      </div>
      <div style="box-sizing: border-box; margin-left: 3px; width: 56px; height: 56px; border-radius: 30px; background: black; padding: 0; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center;">
        <img src="./images/banner.png" style="width: 48px; border-radius: 30px">
      </div>
      <div style="color: #000000; margin-left: 6px; font-size: 1.1em; flex-grow: 1;">${siteName}
        <div style="font-size: 70%; color: #000000;">GET — On Shortcuts</div>
      </div>
      <div style="text-align: center;">
        <a style="text-decoration: none; color: #000000; margin-left: 5px; margin-bottom: 4px; display: inline-block; font-size: 1.5em;" href="${url}" onclick="localStorage.setItem('_shortcutInstalled','1');document.querySelector(':root').style.transform='';this.parentElement.parentElement.remove();">Install</a>
      </div>`
  
      document.querySelector(":root").style.transform = "translateY(64px)"
      document.querySelector(":root").appendChild(t);
  };
};
