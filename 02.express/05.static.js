const express =require('express');
const favicon =require('express-favicon');

const util =require('util')
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico')); //여기 주목!!


app.get('/',function (req,res) {
    html =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express</title>
    </head>
    <body>
        <h1>Static</h1>
        <img src="/cat.jpg" alt="고양이">
        <img src="/img/dog.jpg" alt="강아지">
    </body>
    </html>
    `
   
    res.send(html);
      
});

app.get('*', (req,res) => {
    res.status(404).send('Path not Found')
});

app.listen(3000, () => {  util.log('Server is running at http://127.0.0.1:3000');});