const template =require('./view/template')

module.exports.test = function() {
  

    return`
    ${template.header}
    
    
    
    <div class="container" style="margin-top: 90px">  
      <h1>My Icons <i class="fas fa-heart"></i></h1>
      <p>An icon along with some text: <i class="fas fa-thumbs-up"></i></p> 
    </div>
      
    <div class="container">
      <p>Others:</p>
      <i class="fas fa-cloud"></i>
      <i class="fas fa-coffee"></i>
      <i class="fas fa-car"></i>
      <i class="fas fa-file"></i>
      <i class="fas fa-bars"></i>
    </div>
    
    ${template.footer}

    `;
    
   
}