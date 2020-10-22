const template = require('./templateP');
const ut = require('../util');

module.exports.list = function ( navBar,data) { //, pageNo, startPage, endPage, totalPage 페이지 쓰게되면
    let trs = '';
    for (let row of data) {
        //let displayTime = ut.getDisplayTime(row.modTime);
         let title = (row.replyCount == 0) ? row.title :
            `${row.title}<span class="text-danger">[${row.replyCount}]</span>`; 
        trs += `<tr class="flex"> 
                    <td style="text-align: center;">${row.bid}</td>
                    <td style="text-align: center;"><a href="/bbs/bid/${row.bid}"><strong>${row.title}</strong></a></td>
                    <td style="text-align: center;">${row.uname}</td>
                    <td style="text-align: center;">${row.displayTime}</td>
                    <td style="text-align: center;">${row.viewCount}</td>
                </tr>
        `; //밑에와 테이블 명을 그 칸에 맞쳐주어야 들어간다
    }
    //페이지 지원
   /*  let leftPage = (pageNo > 10) ? `/bbs/list/${Math.floor(pageNo/10) * 10}` : '#';
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
 */
    return `
		${template.header()}
        ${navBar}
        <div class="col-10">
            <div class="container-fluid">
            <h6 style="display:inline">공지사항 및 문의사항</h6>
            <a class="nav-link" href="/bbs/write" style="margin-left: 90% ; display:inline"><i class="far fa-edit"></i></a>
            <hr>
            <table class="table table-hover">        
                <tr class="table-secondary flex">
                    <td style="text-align:center">번호</td>
                    <td style="text-align:center">제목</td>
                    <td style="text-align:center">글쓴이</td>
                    <td style="text-align:center">날짜</td>
                    <td style="text-align:center">조회수</td>
                </tr>
            ${trs}
            </table>
           
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
            </div>         
        </div>
 
        ${template.footer()}
        `;
}