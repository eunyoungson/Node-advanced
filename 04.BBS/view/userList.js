const tplt = require('./templateP');
const ut = require('../util');

module.exports.list = function (navBar, data) {
    let trs = '';
    for (let row of data) {
        trs += `<tr class="flex">
                    <td  style="text-align: center;">${row.uid}</td>
                    <td  style="text-align: center;"><strong>${row.uname}</strong></td>
                    <td  style="text-align: center;">${row.tel  ? row.tel : ' '}</td>
                    <td  style="text-align: center;">${row.email  ? row.email : ' '}</td>
                    <td  style="text-align: center;">${row.regDate}</td>
                    <td  style="text-align: center;">${row.puppyName  ? row.puppyName : ' '}</td>
                    <td  style="text-align: center;">${row.species  ? row.species : ' '}</td>
                    <td  style="text-align: center;">${row.birthday  ? row.birthday : ' '}</td>
                    <td  style="text-align: center;">${row.gender  ? row.gender : ' '}</td>
                    <td  style="text-align: center;"><a href="/update/${row.uid}"><i class="fas fa-user-cog"></i></a>
                        <a href="/user/delete/${row.uid}"><i class="fas fa-trash-alt"></i></a></td>
                </tr>
        `;
    }
    return `
    ${tplt.header()}
    ${tplt.navBar()}
    <div class="col-10">
    <div class="container-fluid">
      <h6>회원 목록</h6>
    
      <table class="table table-hover">        
        <tr class="flex">
            <th style="text-align:center">ID</th>
            <th style="text-align:center">Name</th>
            <th style="text-align:center">Tel</th>
            <th style="text-align:center">Email</th>
            <th style="text-align:center">RD</th>
            <th style="text-align:center">pName</th>
            <th style="text-align:center">pSpecies</th>
            <th style="text-align:center">pBirth</th>
            <th style="text-align:center">pGender</th>
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

${tplt.footer()}
                  
    `;


}