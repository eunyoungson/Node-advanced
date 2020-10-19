const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

module.exports = {
    getConnection:  function() {
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
    },
    //BBS 여기부터 바꾸기.
    getBbsLists:    function(callback) {
        let conn = this.getConnection();
        let sql = `SELECT b.bid, b.uid,u.uname,b.title,b.content, b.modTime, b.viewCount, b.replyCount,              
                    FROM bbs AS b
                    JOIN users AS u
                    ON b.uid=u.uid
                    WHERE b.isDeleted=0
                    ORDER BY b.bid desc 
                    LIMIT 10;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    },
    //여기부터는 동일
    getUserInfo:    function(uid, callback) {
        let conn = this.getConnection();
        let sql = `select uid,uname,tel,email,puppyName,breed,birthday,gender from users where uid like ?;`;
        conn.query(sql, uid, (error, results, fields) => {
            if (error)
                console.log(error);
            callback(results[0]);   // 주의할 것
        });
        conn.end();
    },
    deleteUser:     function(uid, callback) {
        let conn = this.getConnection();
        let sql = `update users set isDeleted=1 where uid like ?;`;
        conn.query(sql, uid, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    updateUser:     function(params, callback) {
        let conn = this.getConnection();
        let sql = `update users set pwd=? where uid like ?;`;
        conn.query(sql, params, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    }
}
