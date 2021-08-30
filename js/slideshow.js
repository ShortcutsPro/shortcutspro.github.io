function fillText () {
  let param = JSON.parse(S);
  let slides = param.slides || [];
  let show = "";
  for (let i = 0; i < slides.length; i++) {
    // alert(slides[i])
    let string = slides[i] + `
    ---
    `;
    alert(string)
    show += `${string}`;
  }
  return show
}