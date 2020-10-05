const express =require('express');
const util =require('util')

const app = express();
/* 
//장점 : 아래와같이 모듈을 분리해서 원하는 만큼 넣어줄수있다
app.use(); //등록할때
app.get(); // get으로 들어오는것들의 url을 보고 처리하겠다~!
app.post();
app.listen(3000, () => {  console.log('Server is running at http://127.0.0.1:3000');}); //
app.listen(3000, () => {  util.log('Server is running at http://127.0.0.1:3000');}); //util쓰면 날짜시간 나온다

app.use(function (req,res) {
    res.writeHead();
    res.end();
});
//아래와 같이 쓴다 
app.use(function (req,res) {    
    res.send(html);
    res.redirect();
}); */

app.use(function (req,res) {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express</title>
    </head>
    <body>
        <h1>welcome to Express</h1>
    </body>
    </html>   
    `
    res.send(html);
   
});
app.listen(3000, () => {  util.log('Server is running at http://127.0.0.1:3000');});

//보통은 app.get app.post로 많이 쓴다!!