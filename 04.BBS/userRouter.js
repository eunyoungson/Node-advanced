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
    let species = req.body.species;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
   
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

uRouter.get('/dispatch', ut.isLoggedIn, (req, res) => {
    if (req.session.uid === 'admin') {
        res.redirect('/user/list');
    } else {
        res.redirect(`/user/update/${req.session.uid}`);
    }
});

uRouter.get('/list', ut.isLoggedIn, (req, res) => {
    if (req.session.uid !== 'admin') {
        let html = alert.alertMsg('조회 권한이 없습니다.', `/bbs/list`);
        res.send(html);
    } else {
        /* let page = parseInt(req.params.page);
        let offset = (page - 1) * 10;
        dm.getUserTotalCount(result => {
            let totalPage = Math.ceil(result.count / 10); */
            dm.getUserList( rows => {
                let view = require('./view/userList');
                let navBar = tplt.navBar(req.session.uname);
                let html = view.list(navBar, rows);
                res.send(html);
            
        });
    }
});

uRouter.get('/uid/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (uid != req.session.uid) {
        let html = alert.alertMsg('조회 권한이 없습니다.', `/bbs/list`);
        res.send(html);
    } else {
        dm.getUserInfo(uid, result => {
            let view = require('./view/userView');
            let navBar = template.navBar(req.session.uname); //tplt이거 확인하기!! template 과 어느게 맞는지
            let html = view.view(navBar, result);
            res.send(html);
        });
    }
});
uRouter.get('/update/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (uid != req.session.uid) {
        let html = alert.alertMsg('수정 권한이 없습니다.', `/bbs/list`);
        res.send(html);
    } else {
        dm.getUserInfo(uid, result => {
            let view = require('./view/userUpdate');
            let navBar = tplt.navBar(req.session.uname);
            let html = view.update(navBar, result);
            res.send(html);
        });
    }
});

uRouter.post('/update', ut.isLoggedIn, (req, res) => {
    let uid = req.body.uid;
    let pwdHash = req.body.pwdHash;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    let puppyName = req.body.puppyName;
    let species = req.body.species;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    if (pwd && pwd !== pwd2) {
        let html = alert.alertMsg('패스워드가 다릅니다.', `/user/update/${uid}`);
        res.send(html);
    } else {
        if (pwd)
            pwdHash = ut.generateHash(pwd);
        let params = [pwdHash, uname, tel, email,puppyName,species,birthday,gender, uid];
        dm.updateUser(params, () => {
            res.redirect(`/user/uid/${uid}`);
        });
    }
});

uRouter.get('/delete/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (req.session.uid !== 'admin') {
        let html = alert.alertMsg('삭제 권한이 없습니다.', `/bbs/list`);
        res.send(html);
    } else {
        let view = require('./view/userDelete');
        let navBar = tplt.navBar(req.session.uname);
        let html = view.delete(navBar, uid);
        res.send(html);
    }
});

uRouter.get('/deleteConfirm/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    dm.deleteUser(uid, () => {
        res.redirect('/user/list');
    });
});

module.exports = uRouter;