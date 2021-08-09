// params.js
// get url search query parameters
function query() {

  const QUERY = new URL (window.location.href);
  const BODY = decodeURIComponent(QUERY.searchParams.get("body"));
  
  console.log(QUERY);
    
    if (BODY === 'null') {
      alert('\n'+'Nothing to see here'+'\n');
      
    } else {
      const HTML = `
      <!---->
      <!-- Bustl. WebView. -->
      <!---->
      <!DOCTYPE html>
      <html><head>
      <meta charset = "UTF-8" />
      <meta name = "viewport' content = 'width = device-width, viewport-fit = cover, initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no" />
      <meta name = "theme-color" content = "white" />
      <title>WebView</title>
      <style>@import url("./css/basic.css");</style>
      <script src = "./js/materialize.min.js"></script>
      <script src = "./js/fa.js"></script>
      </head><body>
      <!---->
      ${BODY}
      <!---->
      </body>
      </html>
      `;
    document.querySelector('html').innerHTML = HTML;
    };
  };