const tplt = require('./templateP');

module.exports.update = function (navBar, data) {
	return `
		${tplt.header()}
        ${navBar}
        <div class="col-10">
        <div class="container-fluid">
          <h6>수정</h6>
          <hr>
          <form action="/bbs/update" method="post" style="padding: 5px;">   
               <input type="hidden" name="bid" id="bid" value="${data.bid}">     
               <label for="title"><span>제목</span></label>
                <br>
                <input type="text" name="title"  value="${data.title} id="title"  style="margin-bottom: 20px;">
                <br>
                <label for="Comment">내용</label>
                
                <textarea name="content"class="form-control" rows="8" id="content" >${data.content}</textarea>
                <br>
               
               <input  class="btn btn-info" type="submit" value="수정하기" onclick="location.href='#'"> 
               <input  class="btn btn-secondary" type="reset" value="취소" onclick="location.href='#'">               
          </form>
        </div> 
        
      </div>
      ${tplt.footer()}
        `;
}