const template = require('./templatePP');

module.exports.view = function(navBar, data) {
	return `
        ${template.header()}
        ${navBar}
        <div class="row">
        <div class="col-1"></div>
        <div class="col-9" style="margin-left: 20%;">
            <h3 style="margin-bottom: 20px; margin-top: 20px;">Location</h3>
    
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8945.505753959804!2d126.83893422936627!3d37.56180408201257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c7199c883a9%3A0x42d19d1e7e163c32!2z7J6s64uo67KV7J24IOyEnOyauO2YuOyEnOyngeyXheyghOusuO2Vmeq1kA!5e0!3m2!1sko!2skr!4v1603427728916!5m2!1sko!2skr" width="480" height="360" frameborder="0" style="border:0; text-align: center;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    
            <h3 style="margin-bottom: 20px; margin-top: 20px;">Contact</h3>
            <h6>Please, contact me if you have any question about me. I will answer you as soon as possible. Thank you! </h6> 
            <h6>문의사항을 남겨주시면, 빠른 시일내에 답변 드리겠습니다. 감사합니다~! </h6>
            <br>
            
            <form action="/contact"  method="POST">
                
                <div class="form-group">
                  <label for="cname">name:</label>
                  <input type="text" class="form-control" placeholder="Enter your name" id="cname" name="cname">
                </div>
                <div class="form-group">
                    <label for="cemail">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="cemail" name="cemail">
                  </div>
                
                <div class="form-group">
                    <label for="cmessage">Message:</label>
                    <textarea class="form-control" rows="5" id="cmessage" name="cmessage"></textarea>
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox"> Remember me
                    </label>
                  </div>
                <button type="submit" class="btn btn-info">Send</button>
              </form>       
        </div>
        <div class="col-2"></div>
    </div>

       

		${template.footer()}
    `;
}