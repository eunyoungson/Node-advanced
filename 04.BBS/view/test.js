const template = require('./template'); //여기 파일위치 조정

module.exports.test = function () {
	return `
		${template.header()}
<div class="container" style="margin-top: 90px;">  
	<p>이 곳에 여러분의 컨텐츠를 채워 넣으면 됩니다.</p>
</div>
		${template.footer()}
    `;
}