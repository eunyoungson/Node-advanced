var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
    fs.readFile('02.ejspage.ejs', 'utf8',function (error,data){
        response.writeHead(200, {'content-type':'text/html'});
        response.end(ejs.render(data,{
            name :'RintIanTta' ,
            description : 'hello ejs with nodejs'
        })); //ejs파일을 html로 변환시켜주는것. 고객이 ejs를 읽을수 없으므로.
           
    });
}).listen(3000, function(){
    console.log('server Running at http://127.0.0.1:3000');
});