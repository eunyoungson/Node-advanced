const express = require('express');
const ut = require('./util');
const dm = require('./db/db-module');
const alert = require('./view/alertMsg');
const tplt = require('./view/templateP');
const cRouter = express.Router();


 cRouter.get('/contact', (req, res) => {
    dm.getBbsLists (data => {
        let navbar = tplt.navBar(req.session.uname);
        const view = require('./view/contact');
        let html = view.list(navbar,data);
        res.send(html); 

    });
}); 
cRouter.post('/contact',(req,res) =>{
    let cname = req.body.cname;
    let cemail = req.body.cemail;
    let cmessage = req.body.cmessage ;
    let params = [cname,cemail,cmessage];
    dm.insertConinfo(params,()=>{
        console.log(params);
        res.redirect('/bbs/list')
    });
}); 