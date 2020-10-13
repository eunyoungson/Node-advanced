const mysql = require('mysql');
const fs = require('fs');
var crypto = require('crypto');
let info = fs.readFileSync('./mysql.json','utf8')
let connInfo = JSON.parse(info)

let conn = mysql.createConnection({
    host  : connInfo.host,
    user :  connInfo.user,
    password : connInfo.password,
    database : connInfo.database
    
}) ; 


var shasum = crypto.createHash('sha256'); //sha512
shasum.update('1234');

var output = shasum.digest('base64');



conn.connect();

let sql = `INSERT INTO users (uid, pwd,name)  VALUES(?,?,?);`;
let params =['sylee', output,'이수연']
//let params =['admin', output,'관리자']
conn.query(sql, params, function(error,fields){
    if (error)
        console.log(error); 
    
    
    
});

conn.end();

// VALUES('admin',${output},'관리자')
//	INSERT INTO users (uid, pwd,name)  VALUES(?,?,?);`