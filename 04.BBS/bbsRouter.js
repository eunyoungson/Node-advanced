const express = require('express');
const ut = require('./util');
const dm = require('./db/db-module');
const alert = require('./view/alertMsg');
const tplt = require('./view/templateP');

const bRouter = express.Router();
bRouter.get('/list', (req, res) => {
    dm.getBbsLists (data => {
        let navbar = tplt.navBar(req.session.uname);
        const view = require('./view/bbsList');
        let html = view.list(navbar,data);
        res.send(html); 

    });
    
});

bRouter.get('/bid/:bid', ut.isLoggedIn, (req, res) => {
    let bid = parseInt(req.params.bid);
    dm.getBbsData(bid, result => {
        dm.increaseViewCount(bid,()=>{
            dm.getReplyData(bid, replies => {
            let navbar = tplt.navBar(req.session.uname);
            const view = require('./view/bbsView');
            let html = view.view(navbar,result,replies);
            res.send(html); 
            });
        });
    });
});
bRouter.post('/reply', ut.isLoggedIn, (req, res) => {
    let bid = parseInt(req.body.bid);
    let uid = req.session.uid;
    let content = req.body.content;
    let isMine = (uid === req.body.uid) ? 1 : 0;
    let params = [bid, uid, content, isMine];
    dm.insertReply(params, () => {
        console.log(params);
        dm.increaseReplyCount(bid, () => {
            res.redirect(`/bbs/bid/${bid}`)
        });
    });
}); 
bRouter.get('/write', ut.isLoggedIn,(req,res)=>{
    const view = require('./view/bbsWrite');
    let navBar = tplt.navBar(req.session.uname);
    let html = view.write(navBar);
    res.send(html);
});
bRouter.post('/write', ut.isLoggedIn,(req,res)=>{
    let uid = req.session.uid;
    let title = req.body.title;
    let content = req.body.content;
    let params = [uid,title,content];
    dm.insertBbs(params,()=>{
        res.redirect('/bbs/list')
    });
}); //경로보기
bRouter.get('/update:bid',ut.isLoggedIn,(req,res) => {
    let bid = req.params.bid;
    let uid = req.params.uid;
    if (uid !== req.session.uid) {
        let html = alert.alertMsg('수정 권한이 없습니다.', `/bbs/bid/${bid}`);
        res.send(html);
    } else {
        dm.getBbsData(bid, result => {
            let view = require('./view/bbsUpdate');
            let navBar = tplt.navBar(req.session.uname);
            let html = view.update(navBar, result);
            res.send(html);
        });
    }
});
bRouter.post('/update', ut.isLoggedIn,(req,res)=>{
 
    let bid = req.body.bid;
    let title = req.body.title;
    let content = req.body.content;
    let params = [title,content,bid];
    dm.updateBbs(params, () => {
        res.redirect(`/bbs/bid/${bid}`);
    });
});

module.exports = bRouter;