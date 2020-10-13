const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dm = require('./DB/userdb-module');
const am = require('./view/alert')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies);
    if(req.cookie && req.cookie.isLoggedIn) {
        dm.getAllLists(rows => {
            const view = require('./view/cookieList');
            let html = view.mainForm(rows);
            res.send(html);
        }); 
    } else {
        
        res.redirect('/login')
    }
});
 
app.get('/login', (req,res) => {
    const view =require('./view/userLogin')
    let html = view.loginForm ();
    res.send(html);
});
app.post('/login', (req,res) => {
    let uid =req.body.uid;
    let pwd =req.body.pwd;
    let pwdHash = dm.genHash(pwd);

    dm.getUserInfo(uid, result =>{
    if (result === undefined) {
        const view =require('./view/alert');
        let html =view.alert(`login 실패:uid ${uid}가 없습니다`,'/login')
        //alert창은 한줄에 와야된다.
       
        res.send(html)
    } else {
        if (result.pwd === pwdHash) {
            res.cookie('isLogedIn',1 ); //,{maxAge: 60*1000} 롭션으로 로그인시간 설정가능
            console.log('로그인 성공');
            res.redirect('/');
        } else {
           
            let html =am.alert(`login 실패:uid${uid}가 없습니다`,'/login')           
            res.send(html)
            
        }
    }
})

           
})

app.get('/logout', (req,res) => {
        res.clearCookie('isLoggedIn');
        res.redirect('/login');
    
})

app.listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
});