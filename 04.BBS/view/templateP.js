module.exports = {
    header:     function() {
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <title>My BBS</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"> 
            <link rel="stylesheet" href="/fontawesome-free-5.15.1-web/css/all.min.css">
            <script src="/jquery/jquery.min.js"></script>
            <script src="/popper/popper.min.js"></script>
            <script src="/bootstrap/js/bootstrap.min.js"></script>
        </head>
        <body>
        `;
    },
    navBar:     function(uname) {
        return `
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <!-- Brand/logo -->
    
    <a class="navbar-brand" href="#">
      <img src="/logo.jpg" alt="logo" style="width:40px; margin-left: 50px;">
    </a>
    
    <!-- Links -->
  
    <ul class="navbar-nav" style="margin-right: 650px;">
      <li class="nav-item">
          <a class="nav-link" href="https://ko.wikipedia.org/wiki/강아지">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://ko.wikipedia.org/wiki/강아지">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" disabled href="#">Contact</a>
        </li>
    </ul>
  
    
    <span class="navbar-text " style="margin-right: 50px ;"  >   
      ${uname}님 반갑습니다.
    </span> 
    <ul class="nav mr-auto">
      <li class="nav-item">
          <a class="nav-link" href="/logout">로그아웃</a>
      </li>
    </ul>  
  </nav>
  <div>
    <img src="img/1.jpg" alt="닥스훈트" id=" style="width: 100%; height: 200px;">
  </div>
  <!--본문-->
  <div class="container" style="margin-top: 30px;">
    <div class="row">
      <div class="col-2">
          <nav class="navbar bg-light">
            <ul class="navbar-nav">           
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">About Dog</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="0917_안드로이드.html">Development </a>
                  <a class="dropdown-item" href="0917_아이폰.html">종류 / 성격</a>  
                  <a class="dropdown-item" href="0917_아이폰.html">Socialization</a>   
                </div>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Store</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="5.2020.html">갤럭시 S20</a>
                      <a class="dropdown-item" href="5.2020.html">V60 씽큐</a>
                      <a class="dropdown-item" href="5.2020.html">아이폰 12</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="5.2020.html">갤럭시 Z 플립</a>
                  </div>
              </li>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="0917_샘플.html">Board</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="0917_2020출시.html">My Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="25_갬블링게임.html">Contact us</a>
              </li>
            </ul>
          </nav>
      </div>
        `;
    },
    footer:     function() {
        return `
        <nav class="navbar navbar-expand-sm bg-secondary navbar-dark fixed-bottom justify-content-center">
        <!-- Navbar text-->
        <span class="navbar-text "  >
          Copyright &copy; 2020 Yomi's Garden
        </span>
      
      </nav>
      
      </body>
      </html>  
        `;
    }
}