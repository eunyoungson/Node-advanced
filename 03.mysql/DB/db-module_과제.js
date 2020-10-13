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
        let sql = `SELECT ggid, name, date_format(debut, '%Y-%m-%d ') AS debut,hit_song_id FROM girl_group ORDER BY ggid DESC LIMIT 15;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            //console.log(rows);
            callback(rows);
            
        });
        conn.end();
    },
    insertSong: function(params,callback) {
        let sql = `insert into girl_group (name, debut) values(?, ?);`;
        
        let conn = this.getConnection();
         conn.query(sql, params, function(error, fields) {
                if (error)
                    console.log(error);
               callback();
            });
         conn.end();
    },
    deleteSong: function(ggid,callback) {
        let sql = `delete from girl_group where ggid=?;`;
        
        let conn = this.getConnection();
        conn.query(sql, ggid, function(error, fields) {
                if (error)
                    console.log(error);
               callback();
            });
        conn.end();
    },
    getSong: function(ggid,callback) {
        let sql = `select ggid, name, date_format(debut, '%Y-%m-%d ') AS debut,hit_song_id from girl_group where ggid=?;`;
        let conn = this.getConnection();
        conn.query(sql, ggid, function(error, rows, fields) {
               if (error)
                   console.log(error);
              callback(rows[0]); //주의
           });
        conn.end();
    },
    updateSong: function(params,callback) {
        let sql = `update girl_group set name=?,debut=? where ggid=?;`;
        
        let conn = this.getConnection();
        conn.query(sql, params, function(error, fields) {
                if (error)
                    console.log(error);
               callback();
            });
        conn.end();
    }
}