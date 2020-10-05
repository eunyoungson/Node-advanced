/* const http = require('http');
http.createServer(function (request, response) { }
이것을 줄여서...require('http').createServer... */

require('http').createServer(function(request,response){
    if(request.url === '/' || request.url ==='favico.ico') {
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Forever</title>
        </head>
        <body>
            <h1>Forever</h1>
        </body>
        </html>        
        `;
        response.end(html);
    } else {
        error.error.error();
    }
}).listen(3000, function(){
    console.log('server Running at http://127.0.0.1:3000');
});