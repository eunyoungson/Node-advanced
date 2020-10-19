const template = require('./templateP');

module.exports.register = function () {
	return `
		${templateP.header()}
		<nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <!-- Brand/logo -->
  
  <a class="navbar-brand" href="0917.html">
    <img src="img/logo.jpg" alt="logo" style="width:40px; margin-left: 50px;">
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

  
  
</nav>
<div>
        <div class="container">
		<div class="row">
			<div class="col-12" ">
				<h3>회원 가입</h3>
				<hr>
			</div>
			<div class="col-3"></div>
			<div class="col-8">
				<form action="/user/register" method="post">
					<table class="table table-borderless">
						<tr>
							<td  colspan="3"  style="text-align: center; padding-right: 30%;"><label for="label"  >&nbsp; &nbsp;소유자 정보 &nbsp; &nbsp;  </label></td>
						</tr>
						<tr>
							<td><label for="uid">사용자 ID</label></td>
							<td><input type="text" name="uid" id="uid" placeholder=" ID"></td>
						</tr>
						<tr>
							<td><label for="uname">소유자 이름</label></td>
							<td><input type="text" name="uname" id="uname" placeholder=" uname"></td>
						</tr>
						<tr>
							<td><label for="tel">전화번호</label></td>
							<td><input type="text" name="tel" id="tel" placeholder="tel"></td>
						</tr>
						<tr>
							<td><label for="email">이메일</label></td>
							<td><input type="text" name="email" id="tel" placeholder="email"></td>
						</tr>
						<tr>
							<td><label for="pwd">패스워드</label></td>
							<td><input type="password" name="pwd" id="pwd" placeholder=" password"></td>
						</tr>
						<tr>
							<td><label for="pwd2">패스워드 확인</label></td>
							<td><input type="password" name="pwd2" id="pwd2" placeholder=" password"></td>
						</tr>
						<tr>
							<td  colspan="3"  style="text-align: center; padding-right: 30%;"><label for="label"  >&nbsp; &nbsp;강아지 정보 &nbsp; &nbsp;  </label></td>
						</tr>
						<tr>
							<td><label for="puppyName">강아지 이름</label></td>
							<td><input type="text" name="PuppyName" id="puppyName" placeholder=" your puppy's name"></td>
						</tr>
						<tr>
							<td><label for="breed">강아지 종류</label></td>
							<td><input type="text" name="breed" id="breed" placeholder="breed"></td>
						</tr>
						<tr>
							<td><label for="birthday">강아지 생년월일</label></td>
							<td><input type="text" name="birthday" id="birthday"  placeholder="****-**-**"></td>
						</tr>
						
						<tr>
							<td><label for="gender">강아지 성별</label></td>
							<td class="puppyinfo">
								<div class="form-check-inline">
									<label class="form-check-label" for="radio1">
									<input type="radio" class="form-check-input" id="radio1" name="optradio" value="female" checked>여자
									</label>
								</div>
								<div class="form-check-inline">
									<label class="form-check-label" for="radio2">
									<input type="radio" class="form-check-input" id="radio2" name="optradio" value="male">남자
									</label>
								</div>
								<div class="form-check-inline">
									<label class="form-check-label" for="radio2">
									<input type="radio" class="form-check-input" id="radio2" name="optradio" value="neutral">중성화
									</label>
								</div>
							</td>
						</tr>
						<!--<tr class="checkbox_wrap mar27">							
								<input type="checkbox" id="marketing" name="marketing" class="agree_chk">
								<label for="marketing">&nbsp;&nbsp;[선택]마케팅 목적 개인정보 수집 및 이용에 대한 동의</label>
									<ul><li>고객님께서는 위의 개인정보 및 회원정보 수정 등을 통해 추가로 수집하는 개인정보에<br/>
										대해 동의하지 않거나 개인정보를 기재하지 않음으로써 거부하실 수 있습니다.<br/>
										다만 이때 회원 대상 서비스가 제한될 수 있습니다.
										</li>	
									</ul>								
						</tr> -->
						<tr>
							<td colspan="3" style="text-align: center; padding-right: 30%; " >
								<input class="btn btn-info" type="submit" value="가입신청" style="margin-right: 5px;" onclick="location.href='#'">
								<input class="btn btn-secondary" type="reset" value="취소" style="margin-right: 5px;"onclick="location.href='#'">
								<input class="btn btn-secondary" type="submit" value="수정하기" onclick="location.href='#'">
							</td>
						</tr>
					</table>
				</form>
			</div>
			<div class="col-1"></div>
		</div>
	</div>
	
		${templateP.footer()}
    `;
}
