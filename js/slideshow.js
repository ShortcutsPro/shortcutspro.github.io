function fillText (slideClass) {
  const Q = new URL (window.location.href);
  let S = JSON.parse(decodeURIComponent(Q.searchParams.get("s")));
  let slides = S.slides || [];
  let string = `
  ${slideClass}
  
  ${slides[0]}`;
  for (let i = 1; i < slides.length; i++) {
    string += `
    
    ****
    
    ${slides[i]}`;
  }
  // alert(string)
  return string
}