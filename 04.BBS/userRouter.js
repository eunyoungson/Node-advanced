const express = require('express');
const ut = require('./util');
const dm = require('./db/db-module');
const alert = require('./view/alertMsg');
const tplt = require('./view/templateP');

const uRouter = express.Router();
uRouter.get('/register', (req, res) => {
    const view = require('./view/userRegister');
    let html = view.register();
    res.send(html); 
    
});

uRouter.post('/register', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    let puppyName = req.body.puppyName;
    let breed = req.body.species;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    res.send(`<h1>uid: ${uid}, pwd: ${pwd}, pwd2: ${pwd2}, uname: ${uname},${tel},${email},puppy : ${puppyName},${species},${birthday},${gender}</h1>`);
    if (pwd !==pwd2) {
        let html = alert.alertMsg('패스워드가 서로 다릅니다.');
         res.send(html);    
    } else {
        let pwdHash = ut.generateHash(pwd);
        let params = [uid, pwdHash, uname, tel, email,puppyName,species,birthday,gender];
        dm.registerUser(params, () => {
            res.redirect('/login');
        });
    }
});

module.exports = uRouter;