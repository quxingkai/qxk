var mysql = require('mysql');
module.exports = function (){
    var con = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'qiao'
    });
    con.connect(function (err) {
        if (err) {
            throw err;
        }
    });
    return con;
}