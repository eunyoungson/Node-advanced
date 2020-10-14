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

let sql = `insert into users(uid, pwd, uname) values(?, ?, ?);`;
let params_array = [['koko', output, '코코'],['rj',output,'린짱']];
for(let params of params_array){
    conn.query(sql, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end();

// VALUES('admin',${output},'관리자')
//	INSERT INTO users (uid, pwd,name)  VALUES(?,?,?);`