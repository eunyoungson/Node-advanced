module.exports = {
    mainForm:   function(rows) {
        let tableRow = '';
        for (let row of rows) {
            tableRow += `<tr>
                            <td style="text-align:center">${row.ggid}</td>
                            <td style="text-align:center">${row.name}</td>
                            <td style="text-align:center">${row.debut}</td>
                            <td style="text-align:center">${row.hit_song_id ? row.hit_song_id : ' '}</td>
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>노래 조회</title>
</head>
<body>
    <h3>노래 조회</h3>
    <hr>
    <table class="table table-striped">
        
        <tr>
            <th style="text-align:center">ggid</th>
            <th style="text-align:center">가수명</th>
            <th style="text-align:center">데뷔날짜</th>
            <th style="text-align:center">히트송 아이디</th>
        </tr>
        ${tableRow}
    </table>
</body>
</html>
        `;
    }
}