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
        let navbar = tplt.navBar(req.session.uname);
        const view = require('./view/bbsView');
        let html = view.list(navbar,result);
        res.send(html); 
    });
});

module.exports = bRouter;