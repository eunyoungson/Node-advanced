const template = require('./templateP'); //uid와 pwd를 주목하자~! 히든으로 받기.

module.exports.update = function(navBar, data) {
	return `
        ${template.header()}
        ${navBar}

    <div class="col-10"  style="margin-top: 10px;">
		<h3>회원 정보 수정</h3>
		<hr>
	
	
        <form action="/user/update" method="post">
            <input type="hidden" name="uid" value="${data.uid}">
            <input type="hidden" name="pwdHash" value="${data.pwd}">
            <table class="table table-borderless">
                <tr>
                    <td  colspan="3"  style="text-align: center; padding-right: 30%;"><label for="label"  >&nbsp; &nbsp;소유자 정보 &nbsp; &nbsp;  </label></td>
                </tr>
                <tr>
                    <td><label for="uid">사용자 ID</label></td>
                    <td>${data.uid}</td>
                </tr>
                <tr>
                    <td><label for="uname">소유자 이름</label></td>
                    <td><input type="text" name="uname" id="uname"  value="${data.uname}"></td>
                </tr>
                <tr>
                    <td><label for="tel">전화번호</label></td>
                    <td><input type="text" name="tel" id="tel"  value="${data.tel}"></td>
                </tr>
                <tr>
                    <td><label for="email">이메일</label></td>
                    <td><input type="text" name="email" id="tel"  value="${data.email}"></td>
                </tr>
                <tr>
                    <td><label for="pwd">패스워드</label></td>
                    <td><input type="password" name="pwd" id="pwd" ></td>
                </tr>
                <tr>
                    <td><label for="pwd2">패스워드 확인</label></td>
                    <td><input type="password" name="pwd2" id="pwd2" ></td>
                </tr>
                <tr>
                    <td  colspan="3"  style="text-align: center; padding-right: 30%;"><label for="label"  >&nbsp; &nbsp;강아지 정보 &nbsp; &nbsp;  </label></td>
                </tr>
                <tr>
                    <td><label for="puppyName">강아지 이름</label></td>
                    <td><input type="text" name="puppyName" id="puppyName" value=" ${data.puppyName}"></td>
                </tr>
                <tr>
                    <td><label for="species">강아지 종류</label></td>
                    <td><input type="text" name="species" id="species" value=" ${data.species} "></td>
                </tr>
                <tr>
                    <td><label for="birthday">강아지 생년월일</label></td>
                    <td><input type="text" name="birthday" id="birthday" value=" ${data.birthday}" ></td>
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
                <tr>
                    <td colspan="3" style="text-align: center; padding-right: 30%; " >
                        <input class="btn btn-info" type="submit" value="수정하기" >
                        <input class="btn btn-secondary" type="reset" value="취소" style="margin-right: 5px;">                 
                    </td>
                </tr>
            </table>
        </form>
	
   
</div>
	    

	${template.footer()}
    `;
}
