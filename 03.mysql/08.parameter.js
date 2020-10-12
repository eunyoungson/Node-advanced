const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mysql.json', 'utf8');
let connInfo = JSON.parse(info);
let conn = mysql.createConnection({
    host:   connInfo.host,
    user:   connInfo.user,
    password:   connInfo.password,
    database:   connInfo.database,
    port:   connInfo.port
});

conn.connect();

let sql = `insert into(title,lyrics) values(?,?);`;
let params = 
       
            ['눈누난나','그래서 난 눈누난나 눈누난나..']

conn.query(sql,params, function(error,  fields) {
    if (error)
        console.log(error);
    let sql = 'select * from songcopy order by sid desc limit 3';
    conn.query(sql,function(error,rows,fields) {
        if(error)
        console.log(error);
        for(let row of rows) {
        console.log(row.sid,row.title,row.lyrics);
        } 
    });
    conn.end();
   
});



//파라메타로 집어넣어야 한다.