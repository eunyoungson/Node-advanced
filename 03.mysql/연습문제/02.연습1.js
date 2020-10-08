const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('../mysql.json','utf8')
let connInfo = JSON.parse(info)

let conn = mysql.createConnection({
    host  : connInfo.host,
    user :  connInfo.user,
    password : connInfo.password,
    database : connInfo.database
    
}) ; 

conn.connect();

let sql = `SELECT ggid, NAME, DATE_FORMAT(debut,'%Y-%m-%d') AS debutDate,hit_song_id  FROM girl_group
	 
WHERE debut BETWEEN ('2009-01-01') AND ('2009-12-31');`;
conn.query(sql, function(error, rows,fields){
    if (error)
        console.log(error); 
    for(let row of rows) {
        console.log(row.ggid,row.NAME,row.debutDate,row.hit_song_id);
    }  //대소문자 반드시 구별해야한다! 
    
});

conn.end();