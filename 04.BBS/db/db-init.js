const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

function getConnection() {
    let conn = mysql.createConnection({
        host:   config.host,
        user:   config.user,
        password:   config.password,
        database:   config.database,
        port:   config.port
    });
    conn.connect(function(error) {
        if (error) 
            console.log('mysql connection error :' + err);
    });
    return conn;
}

let sql = `create table if not exists bbs (
    bid int not null primary key,
    pwd char(44) not null ,
    uname varchar(20) not null,
    tel varchar(20),
    email.varchar(40),
    regDate datetime Default current_timestamp,
    isDeleted int Default 0
)`;
let conn = getConnection();
conn.query(sql, function(error,  fields) {
    if (error)
        console.log(error);
    
});
conn.end();

/* let sql = `select * from song where sid=?;`;
let conn = getConnection();
conn.query(sql, 123, function(error, rows, fields) {
    if (error)
        console.log(error);
    console.log(rows[0]);
});
conn.end();
let sql = `delete from song where sid=?;`;
let conn = getConnection();
conn.query(sql, 125, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */