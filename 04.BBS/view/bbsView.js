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
                        ${reply.content.replace(/\n/g, '<br>')}
                    </div>
                </div>`;
    }

	return `
		${tplt.header()}
        ${navBar}
    
        <div class="col-10">
        <h4>${result.title}</h4>
        <br>  
        <h6> 글번호${result.bid} | ${result.uname} | ${result.displayTime} </h6>
        <h6 style="text-align: right;"> 조회 ${result.viewCount+1} |댓글 ${result.replyCount} </h6>
                 
        <hr>      
        <p>${content}</p>    
         
        <span style="font-size: 1.5em; margin-left: 90%; " >
          <a href="/bbs/update/${result.bid}/uid/${result.uid}"><i class="fas fa-edit"></i></a>&nbsp;
          <a href="/bbs/delete/${result.bid}/uid/${result.uid}"><i class="fas fa-trash-alt"></i></a>
        </span>
       
        ${cards}         
        <form class="form-inline" action="/bbs/reply" method="post" style="margin-top: 10px;">
          <input type="hidden" name="bid" value="${result.bid}">
          <input type="hidden" name="uid" value="${result.uid}">
          <label for="content" style="margin-right: 20px;">댓글</label>      
          <textarea class="form-control" rows="4" cols="80" id="content" style="margin-right: 20px;" name="content"></textarea>
          <input  class="btn btn-info" type="submit" value="등록" onclick="location.href='#'"> 
        </form>           
      </div>       
    </div> 
  </div>

		${tplt.footer()}
        `;
    }