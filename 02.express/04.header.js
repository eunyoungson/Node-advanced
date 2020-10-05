const express =require('express');
const { request } = require('http');
const util =require('util')
const app = express();

//localhost :3000/query?id=kim
app.get('/',function (req,res) {
    //res.send(`<h3>${agent}</h3>`);

    let agent = req.header('User-Agent');

    if (agent.toLowerCase().match(/chrome/)) {
        res.send('크롬 브라우저가 입니다');
    } else {
        res.send('크롬 브라우저가 아닙니다');
    }   
});

app.get('*', (req,res) => {
    res.status(404).send('Path not Found')
});

app.listen(3000, () => {  util.log('Server is running at http://127.0.0.1:3000');});