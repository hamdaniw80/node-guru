var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql-transkrip.default.svc.cluster.local",
  port: "30006",
  user: "whamdani",
  password: "P@ssw0rd",
  database: "transkrip_nilai"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con