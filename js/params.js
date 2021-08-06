// params.js
// get url search query parameters
const QUERY = new URL (window.location.href);
const BODY = decodeURIComponent(query.searchParams.get('body'));
console.log(body);
if (body === 'null') {
  alert('\n'+"Nothing to see here"+'\n');
  } else {
    document.querySelector('body').innerHTML = "<pre>"+body+"</pre>";
};