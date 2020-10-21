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
        let sql = `SELECT b.bid, b.title, u.uname, DATE_FORMAT(b.modTime,'%Y-%m-%d %T') AS displayTime,b.viewCount, b.replyCount             
                    FROM bbs as b
                    join users as u
                    on b.uid=u.uid                
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
  /*  getBbsTotalCount:     function(callback) {
    let conn = this.getConnection();
    let sql = `SELECT count(*) as count FROM bbs where isDeleted=0;`;
    conn.query(sql, (error, results, fields) => {
        if (error)
            console.log(error);
        callback(results[0]);   // 주의할 것
    });
    conn.end();
}, */
getBbsData:     function(bid, callback) {
    let conn = this.getConnection();
    let sql = `SELECT b.bid, b.uid, u.uname, b.title, b.content, 
                DATE_FORMAT(b.modTime, '%Y-%m-%d %T') as displayTime, 
                b.viewCount, b.replyCount
                FROM bbs AS b
                JOIN users AS u
                ON b.uid=u.uid
                WHERE b.bid=?;`;
    conn.query(sql, bid, (error, rows, fields) => {
        if (error)
            console.log(error);
        callback(rows[0]);      // 주의할 것. 글을 선택해서 들어갔으니까 하나만 보여줘야해서?
    });
    conn.end();
},
  getReplyData:     function(bid, callback) {
        let conn = this.getConnection();
        let sql = `SELECT r.rid, r.bid, r.uid, u.uname, r.content, r.isMine,
                    DATE_FORMAT(r.regTime, '%Y-%m-%d %T') as regTime
                    FROM reply AS r
                    JOIN users AS u
                    ON r.uid = u.uid
                    WHERE r.bid=?;`;
        conn.query(sql, bid, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    },

increaseViewCount:  function(bid, callback) {
    let conn = this.getConnection();
    let sql = `update bbs set viewCount=viewCount+1 where bid=?;`;
    conn.query(sql, bid, (error, fields) => {
        if (error)
            console.log(error);
        callback();
    });
    conn.end();
},
//increaseReplyCount
increaseReplyCount:  function(bid, callback) {
    let conn = this.getConnection();
    let sql = `update bbs set replyCount=replyCount+1 where bid=?;`;
    conn.query(sql, bid, (error, fields) => {
        if (error)
            console.log(error);
        callback();
    });
    conn.end();
},
insertReply:  function(params, callback) {
    let conn = this.getConnection();
    let sql = `insert into reply(bid, uid, content, isMine) values(?,?,?,?);`;
    conn.query(sql, params, (error, fields) => {
        if (error)
            console.log(error);
        callback();
    });
    console.log(params);
    conn.end();
},
insertBbs: function(params, callback) {
    let conn = this.getConnection();
    let sql = `insert into bbs(uid,title,content) values(?,?,?);`;
    conn.query(sql, params, (error, fields) => {
        if (error)
            console.log(error);
        callback();
    });
    conn.end();
},
updateBbs:  function(params, callback) {
    let conn = this.getConnection();
    let sql = `update bbs set title=?, content=?, modTime=now() where bid=?;`;
    conn.query(sql, params, (error, fields) => {
        if (error)
            console.log(error);
        callback();
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
