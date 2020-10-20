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
module.exports = bRouter;