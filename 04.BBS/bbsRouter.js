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


module.exports = bRouter;