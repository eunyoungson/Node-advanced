/* const express = require('express');
const ut = require('./util');
const dm = require('./db/db-module');
const alert = require('./view/alertMsg');
const tplt = require('./view/templatePP');
const cRouter = express.Router();


  cRouter.get('/insert', (req, res) => {
  
        let navbar = tplt.navBar(req.session.uname);
        const view = require('./view/contact');
        let html = view.contact(navbar,data);
        res.send(html); 

    });  

cRouter.post('/insert',(req,res) =>{
    let cname = req.body.cname;
    let cemail = req.body.cemail;
    let cmessage = req.body.cmessage ;
    let params = [cname,cemail,cmessage];
    dm.insertConinfo(params,()=>{
        console.log(params);
        res.redirect('/bbs/list')
    });
});  */