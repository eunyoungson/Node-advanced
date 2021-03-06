const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const uRouter = require('./userRouter');
const bRouter = require('./bbsRouter');
//const cRouter = require('./conRouter');

const ut = require('./util');
const am = require('./view/alertMsg');
const dm = require('./db/db-module');
const app = express();


app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/view'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(cookieParser('1q2w3e4r5t6y'));
app.use(session({
    secret: '1q2w3e4r5t6y',     // keyboard cat
    resave: false,
    saveUninitialized: true,
    store: new FileStore({logFn: function(){}})
}));
app.use('/user', uRouter);
app.use('/bbs', bRouter);
//app.use('/con', cRouter);

app.get('/', ut.isLoggedIn, (req, res) => {
    res.redirect('/bbs/list');
});

app.get('/contact', (req, res) => {
    fs.readFile('./view/contact.html', 'utf8', (error, html) => {   
        res.send(html);
    });
}); 
 app.post('/contact',(req,res) =>{
    let cname = req.body.cname;
    let cemail = req.body.cemail;
    let cmessage = req.body.cmessage ;
    let params = [cname,cemail,cmessage];
    let uid = req.params.uid;       
       if (req.session.uid === 'admin') {

        dm.insertConinfo(params,()=>{
            console.log(params);
            let view = require('./view/unuserList');            
            let html = view.list( navBar,params);
            res.send(html);
        });
       } else {
        console.log(params);
        res.redirect('/bbs/list');
       }   
});  

/* app.get('/bbslist', (req, res) => { 로그인 안해도 글 볼수있도록 해볼까?
    fs.readFile('/bbs/list', 'utf8', (error, html) => {
        res.send(html);
    });
}); 
 */

app.get('/login', (req, res) => {
    fs.readFile('./view/login_P.html', 'utf8', (error, html) => {
        res.send(html);
    });
});

app.post('/login', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwdHash = ut.generateHash(pwd);
    //console.log(uid, pwd, pwdHash);
    dm.getUserInfo(uid, result => {
        if (result === undefined) {
            let html = am.alertMsg(`Login 실패: uid ${uid}이/가 없습니다.`, '/login');
            res.send(html);
        } else {
            //console.log(result.pwd);
            if (result.pwd === pwdHash) {
                req.session.uid = uid;
                req.session.uname = result.uname;
                //console.log('Login 성공');
                req.session.save(function() {
                    res.redirect('/bbs/list');
                });
            } else {
                let html = am.alertMsg('Login 실패: 패스워드가 다릅니다.', '/login');
                res.send(html);
            }
        }
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
});