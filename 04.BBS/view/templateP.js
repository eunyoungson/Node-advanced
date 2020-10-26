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
            <link rel="stylesheet" href="/fontawesome-free-5.15.1-web/fontawesome-free-5.15.1-web/css/all.min.css">
            <script src="/jquery/jquery.min.js"></script>
            <script src="/popper/popper.min.js"></script>
            <script src="/bootstrap/js/bootstrap.min.js"></script>
        </head>
        <body style="margin-bottom: 100px;">
        `;
    },
    navBar:     function(uname) {
        return `
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <!-- Brand/logo -->
    
    <a class="navbar-brand" href="/login">
      <img src="/img/요미로고3.png" alt="logo" style="width:40px; margin-left: 50px;">
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
          <a class="nav-link" href="/bbs/list">Board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="/contact">Contact</a>
        </li>
    </ul>
  
    
    <span class="navbar-text " style="margin-right: 30px ; margin-left: 18%"  >   
      ${uname}님 반갑습니다.
    </span> 
    <ul class="nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/user/dispatch"><i class="fas fa-user">사용자수정</i></a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/logout"><i class="fas fa-sign-out-alt">로그아웃</i></a>
      </li>
    </ul>  
  </nav>
  <div>
    <img src="/img/닥스.jpg" alt="닥스훈트" id=" style="width: 100%; ">
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
                  <a class="dropdown-item" href="https://ko.wikipedia.org/wiki/강아지">Development </a>
                  <a class="dropdown-item" href="https://tbever.com/강아지-종류-대표적인-품종-정리/">종류 / 성격</a>  
                  <a class="dropdown-item" href="https://mydog.samsung.com/kor/petculture/socialTraining.do">Socialization</a>   
                </div>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Store</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="5.2020.html">사료/음식</a>
                      <a class="dropdown-item" href="5.2020.html">강아지 용품</a>
                      <a class="dropdown-item" href="5.2020.html">강아지 건강식품</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="5.2020.html">장바구니</a>
                  </div>
              </li>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/bbs/list">Board</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/user/dispatch">My Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact.html">Contact us</a>
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