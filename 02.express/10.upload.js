const fs =require('fs');
const express =require('express');
const bodyParser =require('body-parser');
//const multipart = require('multer')

const app =express();


app.use(bodyParser.urlencoded({ extended : false}));
//app.use(multipart({uploadDir: __dirname + '/public/upload'}))

//로그인 화면을 get방식으로 보여준다.
app.get('/', function (req,res) {  
    fs.readFile('10.fileuploadform.html','utf8', (error,data) => {
        res.send(data);
    })
});

app.post('/', (req,res) => {
    let comment =req.body.comment;
   /*  let filename = req.files.image.name;
    let uploadpath = req.files.image.path ;
    let filetype= req.files.image.type ;
    console.log(filename,filetype);
    console.log(uploadpath);
    console.log(req.body); */
    console.log(req.files);
    res.redirect('/');

    //받은 파일이 이미지면,이름을 변경하고, 아니면 제거
    if (filetype.indexOf('image') >= 0) {
        let outputName = comment + filename;
        let newFileName = __dirname + '/pubilc/upload/' + outputName;
        for (let i=0; i<1000000; i++) ;
        fs.rename(uploadPath, newFileName, err => {
            if (err)
                console.log(err);
            res.redirect('/');
            
        })
    } else {

    }    
});



app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000'); 
});