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
//date_format 들어갈때 l의 위치가 어디들어가는지! r.title 은as를 써서 변형시켜준다.
let sql = `SELECT l.name as name, DATE_FORMAT(l.debut,'%Y-%m-%d') AS debutDate, r.title as songTitle
FROM girl_group AS l 
InNER JOIN song AS r 
ON l.hit_song_id = r.hsid
WHERE debut BETWEEN ('2009-01-01') AND ('2009-12-31') ;`;
conn.query(sql, function(error, rows,fields){
    if (error)
        console.log(error); 
    for(let row of rows) {
        console.log(row.name,row.debutDate,row.songTitle);
    }  
    
});

conn.end();