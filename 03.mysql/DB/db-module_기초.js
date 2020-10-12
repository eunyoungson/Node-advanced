const fs = require('fs');
const mysql = require('mysql');

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
        let sql = `SELECT * FROM song ORDER BY sid DESC LIMIT 5;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            //console.log(rows);
            callback(rows);
            
        });
        conn.end();
    },
    insertSong: function(params,callback) {
        let sql = `insert into song(title, lyrics) values(?, ?);`;
        let params = [title, lyrics]; //여기
        let conn = this.getConnection();
         conn.query(sql, params, function(error, fields) {
                if (error)
                    console.log(error);
                res.redirect('/'); //여기
            });
         conn.end();
    }
}