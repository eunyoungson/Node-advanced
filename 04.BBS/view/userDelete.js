const tplt = require('./templateP');

module.exports.delete = function (navBar, uid) {
	return `
		${tplt.header()}
        ${navBar}

        <div class="col-10" style="margin-top: 90px;">
            <h3>회원정보 삭제</h3>
            <hr>
       
            <div class="col-2"></div>
            <div class="col-6">
                <div class="card border-warning mt-3">
                    <div class="card-body">
                        <h5 class="card-title">삭제하시겠습니까?</h5>
                        <p class="card-text text-center">
                        <button class="btn btn-primary" onclick="location.href='/user/deleteConfirm/${uid}'">삭제</button>
                        <button class="btn btn-secondary" onclick="location.href='/user/list/${uid}'">취소</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
        </div>

		${tplt.footer()}
    `;
}