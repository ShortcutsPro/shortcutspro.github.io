// params.js
// get url search query parameters
function query() {

  const QUERY = new URL (window.location.href);
  const BODY = decodeURIComponent(QUERY.searchParams.get("body"));
  
  console.log(QUERY);
    
  if (BODY === 'null') {
    alert('\n'+'This is not the page'+'\n'+'…you are looking for.'+'\n\n'+'Move along. 👋 Move along.');
      
    } else {
      const HTML = `
      <!---->
      <!-- Bustl. WebView. -->
      <!---->
      <!DOCTYPE html>
      <html><head>
      <meta charset = "UTF-8" />
      <meta name = "viewport' content = 'width = device-width, viewport-fit = cover, initial-scale = 1" />
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