const tplt = require('./templateP');

module.exports.write = function (navBar) {
	return `
		${tplt.header()}
        ${navBar}
        <div class="col-10">
        <div class="container-fluid">
          <h6>수정</h6>
          <hr>
          <form action="/insert" method="post" style="padding: 5px;">        
               <label for="title"><span>제목</span></label>
                <br>
                <input type="text" name="title" id="title"  style="margin-bottom: 20px;">
                <br>
                <label for="Comment">내용</label>
                
                <textarea class="form-control" rows="8" id="comment" ></textarea>
                <br>
               <input  class="btn btn-info" type="submit" value="글쓰기" onclick="location.href='#'"> 
               <input  class="btn btn-secondary" type="reset" value="취소" onclick="location.href='#'">               
          </form>
        </div> 
        
      </div>   

    `;
}