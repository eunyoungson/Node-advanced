const tplt = require('./templateP');
const ut = require('../util');

module.exports.list = function (navBar, data, pageNo, totalPage) {
    let trs = '';
    for (let row of data) {
        trs += `<tr class="d-flex">
                    <td class="col-1" style="text-align: center;">${row.uid}</td>
                    <td class="col-2" style="text-align: center;"><strong>${row.uname}</strong></td>
                    <td class="col-2" style="text-align: center;">${row.tel  ? row.tel : ' '}</td>
                    <td class="col-2" style="text-align: center;">${row.email  ? row.email : ' '}</td>
                    <td class="col-2" style="text-align: center;">${row.regDate}</td>
                    <td class="col-1" style="text-align: center;"><a href="/update/${row.uid}">수정</a>
                        <a href="/user/delete/${row.uid}"><i class="fas fa-trash-alt"></i></a></td>
                </tr>
        `;
    }
    return `
    ${tplt.header()}
    ${tplt.navBar()}
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
            <th style="text-align: center;"><strong>액션</strong></th>
        </tr>
        ${trs}
      </table>
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
      </ul>
    </div>         
</div>
</div>
</div>
${tplt.footer()}
                  
    `;


}