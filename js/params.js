// params.js
// get url search query parameters

const QUERY = new URL (window.location.href);
const BODY = decodeURIComponent(QUERY.searchParams.get('body'));

// console.log(BODY);
if (BODY === 'null') {
  alert('\n'+"Nothing to see here"+'\n');
  } else {
    document.querySelector('body').innerHTML = "<pre>"+BODY+"</pre>";
};