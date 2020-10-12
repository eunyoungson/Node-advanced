const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('../mysql.json', 'utf8');
let connInfo = JSON.parse(info);
let conn = mysql.createConnection({
    host:   connInfo.host,
    user:   connInfo.user,
    password:   connInfo.password,
    database:   connInfo.database,
    port:   connInfo.port
});

conn.connect();

let sql = `insert into(title,lyrics) values('Dynamite,'icame to dance-dance');`;
conn.query(sql, function(error,  fields) {
    if (error)
        console.log(error);
   
});

conn.end();

//파라메타로 집어넣어야 한다.