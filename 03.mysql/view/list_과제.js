module.exports = {
    mainForm:   function(rows) {
        let tableRow = '';
        for (let row of rows) {
            tableRow += `<tr>
                            <td>${row.ggid}</td>
                            <td>${row.name}</td>
                            <td>${row.debut}</td>
                            <td>${row.hit_song_id}</td>
                            <td><a href="/update/${row.ggid}">수정</a>
                                 <a href="/delete/${row.ggid}">삭제</a></td>
                        </tr>`;
        }
        return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>노래 조회</title>
</head>
<body>
    <h3>노래 조회</h3>
    <hr>
    <table>
        <tr>
            <th>ggid</th>
            <th>가수명</th>
            <th>데뷔날짜</th>
            <th>히트송 아이디</th>
        </tr>
        ${tableRow}
    </table>
</body>
</html>
        `;
    }
}