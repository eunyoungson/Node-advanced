const http = require('http');
const url = require('url');
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
let sql = `SELECT ggid, NAME, DATE_FORMAT(debut,'%Y-%m-%d') AS debutDate,hit_song_id  FROM girl_group
	 
WHERE debut BETWEEN ('2009-01-01') AND ('2009-12-31');`;
let html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>연습문제 5</title>
    </head>
    <body>
        <h3>연습문제 1</h3>
        <hr>
        <table>
            <tr>
                <th>아이디명</th>
                <th>이름</th>
                <th>데뷔날짜</th>
                <th>히트송아이디</th>
            </tr>
`;

let server = http.createServer((req, res) => {
    conn.connect();

    conn.query(sql, function(error, rows, fields) {
        if (error)
            console.log(error);
        for (let row of rows) {
            html += `<tr>
                        <td>${row.ggid}</td>
                        <td>${row.NAME}</td>
                        <td>${row.debutDate}</td>
                        <td>${row.hit_song_id}</td>
                     </tr>`;
        }
        html += `   </table>
                </body>
                </html>`;
        res.end(html);
    });
    conn.end();
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
}); 