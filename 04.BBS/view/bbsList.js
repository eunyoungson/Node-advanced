const tplt = require('./template');
const ut = require('../util');

module.exports.list = function (navBar, data, pageNo, startPage, endPage, totalPage) {
    let trs = '';
    for (let row of data) {
        let displayTime = ut.getDisplayTime(row.modTime);
        let title = (row.replyCount == 0) ? row.title :
            `${row.title}<span class="text-danger">[${row.replyCount}]</span>`;
        trs += `<tr class="d-flex">
                    <td class="col-1" style="text-align: center;">${row.bid}</td>
                    <td class="col-6"><a href="/bbs/bid/${row.bid}"><strong>${title}</strong></a></td>
                    <td class="col-2" style="text-align: center;">${row.uname}</td>
                    <td class="col-2" style="text-align: center;">${displayTime}</td>
                    <td class="col-1" style="text-align: center;">${row.viewCount}</td>
                </tr>
        `;
    }
    //페이지 지원
    let leftPage = (pageNo > 10) ? `/bbs/list/${Math.floor(pageNo/10) * 10}` : '#';
    let pages = `<li class="page-item">
                    <a class="page-link active" href="${leftPage}" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span></a>
                </li>`;
    for (let page = startPage; page <= endPage; page++) {
        if (page === pageNo)
            pages += `<li class="page-item active" aria-current="page">
                        <span class="page-link">
                            ${page}<span class="sr-only">(current)</span>
                        </span>
                    </li>`;
        else
            pages += `<li class="page-item"><a class="page-link" href="/bbs/list/${page}">${page}</a></li>`;
    }
    let rightPage = (endPage < totalPage) ? `/bbs/list/${Math.ceil(pageNo/10)*10 + 1}` : '#';
    pages += `<li class="page-item">
                <a class="page-link" href="${rightPage}" aria-label="Next">
                <span aria-hidden="true">&raquo;</span></a>
            </li>`;

    return `
		${tplt.header()}
        ${navBar}
        <div class="col-10">
            <div class="container-fluid">
            <h6>문의사항</h6>
            <hr>
            <table class="table table-hover">        
                <tr class="table-active">
                    <th style="text-align:center">번호</th>
                    <th style="text-align:center">제목</th>
                    <th style="text-align:center">글쓴이</th>
                    <th style="text-align:center">날짜</th>
                    <th style="text-align:center">조회수</th>
                </tr>
            <!-- ${trs}-->
            </table>
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
            </div>         
        </div>
 
        ${tplt.footer()}
        `;
}