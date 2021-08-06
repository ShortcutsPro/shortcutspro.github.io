// params.js
// get url search query parameters

const QUERY = new URL (window.location.href);
const BODY = decodeURIComponent(QUERY.searchParams.get('body'));

// console.log(BODY);
if (BODY === 'null') {
  alert('\n'+"Nothing to see here"+'\n');
  } else {
    document.querySelector('html').innerHTML = `
      <!---->
      <!-- Bustl. WebView. -->
      <!---->
      <!DOCTYPE html>
      <html lang = "en" dir = "ltr"><head>
      <meta charset = "UTF-8" />
      <meta name = "viewport" content = "width = device-width, viewport-fit = cover, initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no" />
      <meta http-equiv = "X-UA-Compatible" content = "ie=edge" />
      <meta name = "theme-color" content = "white" />
      <link rel = "stylesheet" href ="./css/basic.css" type = "text/css" />
      <title>WebView</title>
      <script src = "./js/params.js"></script>
      <script src = "./js/materialize.min.js"></script>
      <script src = "./js/fa.js"></script>
      </head><body>
      <!---->
      <pre>${BODY}</pre>
      <!---->
      </body>
      </html>
    `;
};