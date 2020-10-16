const mysql = require('mysql');
const fs = require('fs');
const crypto = require('crypto');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);
let conn = mysql.createConnection({
    host:   config.host,
    user:   config.user,
    password:   config.password,
    database:   config.database,
    port:   config.port
});

// SHA: Secure Hash Algorithm
let shasum = crypto.createHash('sha256');   // sha256, sha512
shasum.update('1234');
let output = shasum.digest('base64');  // hex, base64

let sql = `insert into users(uid, pwd, uname,tel,email,puppyName,species,birthday,gender) values(?, ?,?, ?,?,?,?,?,?);`;
let params_array =[
 ['bj', output,'브랜든조','010-1111-1114','brandonjoe@google.com', '코코','푸들','2013-07-28','neutral'],
 ['emlee', output,'이은미','010-1111-1110','emlee@google.com', '린짱','시츄','2014-02-15','female' ],
 ['eykim',output,'김은영', '010-1111-1112','eykim@google.com', '로이', '시츄' ,'2014-05-12', 'neutral'],
 ['jylee',output,'이지영', '010-1111-1113', 'jylee@google.com', '까미', '슈나우저' ,'2010-01-01', 'female'],
 ['gtyeon',output,'구태연','010-1111-1115', 'gtyeon@google.com', '여름이', '말티즈' ,'2014-07-15', 'male'],
 ['mjkim',output,'김미정', '010-1111-1116','mjkim@google.com', '행운이', '시바' ,'2013-11-13', 'male']
];
for(let params of params_array){
    conn.query(sql, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end();

// VALUES('admin',${output},'관리자')
//	INSERT INTO users (uid, pwd,name)  VALUES(?,?,?);`