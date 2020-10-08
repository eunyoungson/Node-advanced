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

let sql = `SELECT * FROM country;
SELECT NAME, continent,COUNT(*),GROUP_CONCAT(NAME) FROM country
GROUP BY continent;
`;
conn.query(sql, function(error, rows,fields){
    if (error)
        console.log(error); 
    for(let row of rows) {
        console.log(row.ggid,row.NAME,row.debutDate,row.hit_song_id);
    }  //대소문자 반드시 구별해야한다! 
    
});

conn.end();