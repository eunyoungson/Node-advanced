const tplt = require('./templatePP');
const ut = require('../util');

module.exports.list = function ( navBar,data) {
    let trs = '';
    for (let row of data) {
        trs += `<tr class="flex">
                  
                    <td  style="text-align: center;"><strong>${row.cname}</strong></td>                   
                    <td  style="text-align: center;">${row.cemail}</td>
                    
                    <td  style="text-align: center;">${row.cmessage}</td>                  
                </tr>
        `;
    }
    return `
    ${tplt.header()}
    ${navBar}

    <div class="row" style="margin-top: 30px;">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="container-fluid">
        <h6>비회원 문의목록</h6>
        
        <table class="table table-hover">        
          <tr class="flex">
               
                <th style="text-align:center">Name</th>               
                <th style="text-align:center">Email</th>               
                <th style="text-align:center">Message</th>
                
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
      <div class="col-1"></div>
    </div>
${tplt.footer()}
                  
    `;


}