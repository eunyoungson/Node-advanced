const fs = require('fs');
const mysql = require('mysql');
const crypto = require('crypto');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

module.exports = {
    getConnection: function () {
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
    getAllLists: function(callback) {
        let conn = this.getConnection();
        let sql = `SELECT uid,uname,DATE_FORMAT(regDate,'%Y-%m-%d %T') AS regDate 
                        FROM users WHERE isDeleted = 0 ORDER BY regDate limit 10;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            //console.log(rows);
            callback(rows);
            
        });
        conn.end();
    },
    getUserInfo: function(uid, callback){
        let conn = this.getConnection();
        let sql = `SELECT * FROM users	where uid like ?;`;
        conn.query(sql, uid, (error, results, fields) => {
            if (error)
                console.log(error);
            
            callback(results[0]); //주의할것
            
        });
        conn.end();
    },
    genHash: function (something) {
        var shasum = crypto.createHash('sha256'); //sha512
        shasum.update(something);
        var uidHash = shasum.digest('base64');
        //var output = shasum.digest('base64');
       
        return uidHash ;
    }
}