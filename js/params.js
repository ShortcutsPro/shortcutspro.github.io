// params.js
// get url search query parameters
function query() {

  const QUERY = new URL (window.location.href);
  const BODY = decodeURIComponent(QUERY.searchParams.get("body"));
  
  console.log(QUERY);
  if (QUERY === 'https://shortcutspro.github.io/webview.html') {
    
    let html = document.querySelector('html');
    if (BODY === 'null') {
      alert('\n'+'Nothing to see here'+'\n');
      
    } else {
      html.innerHTML = `
      <pre><!---->
      <!-- Bustl. WebView. -->
      <!---->
      <!DOCTYPE html>
      <html lang = "en" dir = "ltr"><head>
      <meta charset = "UTF-8" />
      <meta name = "viewport" content = "width = device-width, viewport-fit = cover, initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no" />
      <meta name = "theme-color" content = "white" />
      <link rel = "stylesheet" href ="./css/basic.css" type = "text/css" />
      <title>WebView</title>
      <script src = "./js/params.js"></script>
      <script src = "./js/materialize.min.js"></script>
      <script src = "./js/fa.js"></script>
      </head><body>
      <!---->
      ${BODY}
      <!---->
      </body>
      </html></pre>
      `;
    };
  };
};