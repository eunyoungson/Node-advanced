var express = require('express')
const bodyParser = require('body-parser');
const url = require('url');

var fs = require('fs');
const view = require('./view/index');
const template =require('./view/template')
 
var app = express();
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/', function(req, res) { 
  fs.readdir('data', function(error, filelist){
    let list =template.listGen(filelist);
    let content = template.HOME_CONTENTS;
    content = content.replace(/\n/g,'<br>');
    let control = template.buttonGen();
    let html = view.index('web 기술', list, content,control); 
    res.send(html);   
  });  
});

 app.get('/id/:id', (req,res) => { 
  fs.readdir('data',function(error, filelist){                    
    let list =template.listGen(filelist);
    let title = req.params.id ;     
    let control = template.buttonGen(title);               
    let filepath ='data/' + title + '.txt';
    fs.readFile(filepath,'utf8',(error,buffer) => {
        buffer = buffer.replace(/\n/g, '<br>');
        let html = view.index(title,list,buffer,control);
        res.send(html);
    })   
  }); 
});

app.get('/create', (req,res) => { 
  fs.readdir('data', function(error, filelist) {
    let list = template.listGen(filelist);
    let content = template.createForm();
    let control = template.buttonGen();
    let html = view.index('글 생성', list, content, control);
    res.send(html);
  });

});

app.post('/create', (req,res) => { 
 
    let subject = req.body.subject;
    let description =req.body.description ;
    //console.log(param.subject, param.description);
    let filepath = 'data/' + subject + '.txt';
    fs.writeFile(filepath, description, error => {
        let encoded = encodeURI(`/id/${subject}`);
        console.log(encoded);
        res.status(302).redirect(encoded);
       
      });
});

app.get('/delete', (req,res) => { 
  fs.readdir('data', function(error, filelist) {
    let title = req.params.id ; 
    let list = template.listGen(filelist);
    let content = template.deleteForm(title);
    let control = template.buttonGen();
    let html = view.index('글 삭제', list, content, control);
    res.send(html);
  });

});

app.post('/delete', (req,res) => { 
  let subject = req.body.subject;
  
  let filepath = 'data/' + subject + '.txt';
  fs.unlink(filepath, error => {
    res.status(302).redirect('/');
     
  });
});

app.get('/update', (req,res) => { 
  fs.readdir('data', function(error, filelist) {
    let list = template.listGen(filelist);
    let title = req.params.id;
    let control = template.buttonGen();
    let filepath = 'data/' + title + '.txt';
    fs.readFile(filepath, 'utf8', (error, buffer) => {
        let content = template.updateForm(title, buffer);
        let html = view.index(`${title} 수정`, list, content, control);
        res.send(html);
    });
  });
});

app.post('/update', (req,res) => { 
  let param = qs.parse(body);
  let subject = req.body.subject;
  let original = req.body.original ;
  let description =req.body.description ;
  let filepath = 'data/' + original + '.txt';
  fs.writeFile(filepath, description, error => {
      let encoded = encodeURI(`/id/${subject}`);
      
      if (original !== subject) {
          fs.renameSync(filepath, `data/${subject}.txt`);
      }
      res.status(302).redirect(encoded);
  });
});




app.get('*', (req, res) => {
  res.status(404).send('Path not found');
});
 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});