const express = require('express');
const bodyParser = require('body-parser');
const dm = require('./DB/db-module_과제');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    dm.getAllLists(rows => {
        const view = require('./view/list_과제');
        let html = view.mainForm(rows);
        res.send(html);
    }); 
});
 
app.get('/insert', (req, res) => {
    const view = require('./view/insert_과제');
    let html = view.insertForm();
    res.send(html);
});
 
app.post('/insert', (req, res) => {
    let name = req.body.name;
    let debut = req.body.debut;
    
   
    let params = [name, debut];
    dm.insertSong(params,() =>{
        res.redirect('/');
    })
}); 

app.get('/delete/:ggid',(req,res)=>{
    let ggid = parseInt(req.params.ggid);
    console.log(ggid);
   
    dm.deleteSong(ggid, ()=>{
        res.redirect('/');
    })

})

app.get('/update/:ggid',(req,res)=>{
    let ggid = parseInt(req.params.ggid);
    dm.getSong(ggid, result =>{
        const view = require('./view/update_과제');
    let html = view.updateForm(result);
    res.send(html);
    })

})
 
app.post('/update',(req,res)=>{
    let ggid = parseInt(req.body.ggid);
    let name = req.body.name;
    let debut = req.body.debut;
    
    let params = [name, debut,ggid];
    dm.updateSong(params,() =>{
        res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
});
