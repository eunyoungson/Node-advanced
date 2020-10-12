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
let sql = `SELECT country.Name AS country,
        city.Name as city,
        city.Population as population
        FROM country
        JOIN city ON country.code = city.CountryCode
        WHERE continent = 'Asia'
        ORDER BY population DESC
        LIMIT 10;`;
let html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>연습문제 3</title>
    </head>
    <body>
        <h3>연습문제 1</h3>
        <hr>
        <table>
            <tr>
                <th>나라명</th>
                <th>도시명</th>
                <th>인구수</th>
            </tr>
`;

let server = http.createServer((req, res) => {
    conn.connect();

    conn.query(sql, function(error, rows, fields) {
        if (error)
            console.log(error);
        for (let row of rows) {
            html += `<tr>
                        <td>${row.country}</td>
                        <td>${row.city}</td>
                        <td>${row.population}</td>
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