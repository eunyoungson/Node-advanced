module.exports = {
    header:  function(){
        return`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <title>Bootstrap Example</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
         
          <link rel="stylesheet" href="/fontawesome-free-5.15.1-web/css/all.min.css" >
          <script src="/jquery/jquery.min.js"></script>
          <script src="/popper/popper.min.js"></script>
          <script src="/bootstrap/js/bootstrap.min.js"></script>
        </head>
        <body>



        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <!-- Brand/logo -->
        
            <a class="navbar-brand" href="index.html">
                <img src="img/logo.jpg" alt="logo" style="width:40px; margin-left: 50px;">
            </a>
            
            <!-- Links -->

            <ul class="navbar-nav" style="margin-right: 650px;>
                <li class="nav-item">
                    <a class="nav-link" href="https://ko.wikipedia.org/wiki/스마트폰#역사">HISTORY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ko.wikipedia.org/wiki/안드로이드_(운영_체제)">ANDROID</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ko.wikipedia.org/wiki/아이폰">IPHONE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" disabled href="#">SAMPLE</a>
                </li>
            </ul>

            <span class="navbar-text " style="margin-right: 50px ;"  >
                로그인 해주셔서 감사합니다.
            </span>   
        </nav>
        `;
    }, 
    footer: function(){

        return`
        <nav class="navbar navbar-expand-sm bg-secondary navbar-dark fixed-bottom justify-content-center">

            <!-- Navbar text-->
            <span class="navbar-text "  >
                Copyright &copy; 2020 Hoseo Institute of Big Data
            </span>

        </nav>
        </body>
        </html>
        `

    }
}