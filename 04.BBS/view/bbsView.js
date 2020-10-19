const tplt = require('./templateP');

module.exports.view = function (navBar, result, replies) {
    let content = result.content.replace(/\n/g, '<br>');
    let cards = '';
    for (let reply of replies) {
        cards += (reply.isMine == 0) ?
                `<div class="card bg-light text-dark mt-1" style="margin-right: 45%;">` :
                `<div class="card text-right mt-1" style="margin-left: 60%;">`;
        cards += `
                    <div class="card-body">
                        ${reply.uname}&nbsp;&nbsp;${reply.regTime}<br>
                        ${reply.content.replace(/\r/g, '<br>')}
                    </div>
                </div>`;
    }

	return `
		${tplt.header()}
        ${navBar}
    
        <div class="col-10">
        <h4>${title}</h4>
        <br>  
        <h6> 글번호${result.bid} | ${result.uname} |글시간 ${result.modTime} </h6>
        <h6 style="text-align: right;"> 조회 ${result.viewCount+1} |댓글 ${result.replyCount} </h6>
        <br>            
        <hr>      
        <p>${content}</p>    
        <br>  
        <span style="font-size: 1.5em; text-align: right;">
          <a href="/bbs/update/${result.bid}"><i class="fas fa-edit"></i></a>&nbsp;
          <a href="/bbs/delete/${result.bid}"><i class="fas fa-trash-alt"></i></a>
        </span>
       
        ${cards}         
        <form class="form-inline" action="/bbs/reply" method="post" style="margin: auto;">
          <label for="replyContent" style="margin-right: 20px;">댓글</label>
          <textarea class="form-control" rows="4" cols="80" id="replycontent" style="margin-right: 20px;" ></textarea>
          <input  class="btn btn-info" type="submit" value="등록" onclick="location.href='#'"> 
        </form>           
      </div>       
    </div> 
  </div>

		${tplt.footer()}
        `;
    }