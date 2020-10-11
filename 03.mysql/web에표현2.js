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
let sql = `SELECT l.name as name, 
            DATE_FORMAT(l.debut,'%Y-%m-%d') AS debutDate,
            r.title as songTitle
        FROM girl_group AS l 
        InNER JOIN song AS r 
        ON l.hit_song_id = r.hsid
        WHERE debut BETWEEN ('2009-01-01') AND ('2009-12-31') ;`;
let html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>연습문제 2</title>
    </head>
    <body>
        <h3>연습문제 1</h3>
        <hr>
        <table>
            <tr>
                <th>이름</th>
                <th>데뷔날짜</th>
                <th>곡이름</th>
            </tr>
`;

let server = http.createServer((req, res) => {
    conn.connect();

    conn.query(sql, function(error, rows, fields) {
        if (error)
            console.log(error);
        for (let row of rows) {
            html += `<tr>
                        <td>${row.name}</td>
                        <td>${row.debutDate}</td>
                        <td>${row.songTitle}</td>
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