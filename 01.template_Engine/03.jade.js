var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (request, response) {
    fs.readFile('03.jadepage.jade', 'utf8',function (error,data){
        var fn =jade.compile(data);
        response.writeHead(200, {'content-type':'text/html'});
        response.end(fn());
    });
}).listen(3000,function(){
    console.log('server Running at http://127.0.0.1:3000');
});