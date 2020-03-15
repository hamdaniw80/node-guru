var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.56.101",
  user: "whamdani",
  password: "P@ssw0rd",
  database: "transkrip_nilai"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con