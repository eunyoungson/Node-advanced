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
        let sql = `SELECT bid, title, content, modTime, replyCount             
                    FROM bbs                     
                    WHERE isDeleted=0
                    ORDER BY bid desc 
                    LIMIT 10;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end(); 
   },
    //user
    registerUser:     function(params, callback) {
        let conn = this.getConnection();
        let sql = `insert into users(uid, pwd, uname, tel, email,puppyName,species,birthday,gender) values(?,?,?,?,?,?,?,?,?);`;
        conn.query(sql, params, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    //여기부터는 동일
    getUserInfo:    function(uid, callback) {
        let conn = this.getConnection();
        let sql = `select uid,pwd,uname,tel,email,puppyName,species,birthday,gender from users where uid like ?;`;
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
