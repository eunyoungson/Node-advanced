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
    
    <a class="navbar-brand" href="#">
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