const express = require('express');
const bodyParser = require('body-parser');
const dm = require('./DB/userdb-module');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    dm.getAllLists(rows => {
        const view = require('./view/userList');
        let html = view.mainForm(rows);
        res.send(html);
    }); 
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
            console.log('로그인 성공');
            res.redirect('/');
        } else {
            const view =require('./view/alert');
            let html =view.alert(`login 실패:uid${uid}가 없습니다`,'/login')           
            res.send(html)
            
        }
    }

           
    })
})

app.listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
});