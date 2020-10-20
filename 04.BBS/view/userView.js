const template = require('./templateP');

module.exports.view = function(navBar, data) {
	return `
        ${template.header()}
        ${navBar}

        <div class="col-10">
            <h3>회원정보 상세조회</h3>
                
            <table class="table table-condensed" style="margin: 60px;">
                <tr>
                    <td>사용자 ID</td>
                    <td>${data.uid}</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>${data.uname}</td>
                </tr>
                <tr>
                    <td>전화번호</td>
                    <td>${data.tel}</td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>${data.email}</td>
                </tr>
                <tr>
                    <td>강아지 이름</td>
                    <td>${data.puppyName}</td>
                </tr>
                <tr>
                    <td>강아지 종류</td>
                    <td>${data.species}</td>
                </tr>
                <tr>
                    <td>강아지 생년월일</td>
                    <td>${data.birthday}</td>
                </tr>
                <tr>
                    <td>강아지 성별</td>
                    <td>${data.gender}</td>
                </tr>
                
                <tr>
                    <td colspan="2" style="text-align: center; padding-top: 20px;"">
                        <button class="btn btn-primary" onclick="location.href='/bbs/list/1'">확인</button>
                    </td>
                </tr>
            </table>
        </div>
       

		${template.footer()}
    `;
}