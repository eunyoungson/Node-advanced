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
function genHash(something) {
    var shasum = crypto.createHash('sha256'); //sha512
    shasum.update(something);
    var uidHash = shasum.digest('base64');
    //var output = shasum.digest('base64');
}
//사용자가 입력한 uid와 psw를 각각 'admin','1234'로 가정
let uid = 'admin' // res.body.uid
let pwd = '1234' //res.body.pwd
let pwdHash = genHash(pwd)




conn.connect();

let sql = `SELECT * FROM users	where uid like ?;`;
//let params =['admin', output,'관리자']
conn.query(sql, uid, function(error,results,fields){
    if (error)
        console.log(error); 
    console.log(result);
    let result = results[0];
    if (result.pwd === pwdHash) {
        console.log('로그인 성공');
    } else {
        console.log('로그인 실패 : 패스워드가 다릅니다');
    }
    
    
});

conn.end();

// VALUES('admin',${output},'관리자')
//	INSERT INTO users (uid, pwd,name)  VALUES(?,?,?);`