const fs =require('fs');
const express =require('express');
const bodyParser =require('body-parser');


const app =express();


app.use(bodyParser.urlencoded({ extended : false}));

app.get('/',function  (req,res) {
    res.redirect('/login')
    //res.send('<h1>3초후 로그인 페이지로 이동합니다</h1>');
   /*  setTimeout( () => {
        res.redirect('/login')
    },3000);*/
    return;
}); 

//로그인 화면을 get방식으로 보여준다.
app.get('/login', function (req,res) {  
    fs.readFile('09.login.html','utf8', (error,data) => {
        res.send(data);
    })
});

app.post('/login',(req,res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    console.log(req.body);
    console.log(uid,pwd)
    if(uid === 'park' && pwd === '1234')
        res.send(`<h1>login Success</h1>`)
    else 
        res.redirect('/login')
});


app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000'); 
});