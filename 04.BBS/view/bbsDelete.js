const tplt = require('./templateP');

module.exports.delete = function (navBar, bid) {
	return `
		${tplt.header()}
        ${navBar}

        <div class="col-10" style="margin-top: 40px; padding-left:80px;">
            <h3>게시판 글삭제</h3>
            <hr style="margin-bottom:40px;">
            <div class="card border-warning mt-3" >
                <div class="card-body">
                    <h5 class="card-title">삭제하시겠습니까?</h5>
                    <p class="card-text text-center">
                        <button class="btn btn-primary" onclick="location.href='/bbs/deleteConfirm/${bid}'">삭제</button>
                        <button class="btn btn-secondary" onclick="location.href='/bbs/bid/${bid}'">취소</button>
                    </p>
                </div>
            </div>
        </div>

		${tplt.footer()}
    `;
}