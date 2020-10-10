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
SELECT NAME, continent,COUNT(*) as CountCont,GROUP_CONCAT(NAME) as NameCont FROM country
GROUP BY continent;
`;
conn.query(sql, function(error, rows,fields){
    if (error)
        console.log(error); 
    for(let row of rows) {
        console.log(row.NAME,row.ConutCont,row.NameCont);
    }  //대소문자 반드시 구별해야한다! 
    
});

conn.end();