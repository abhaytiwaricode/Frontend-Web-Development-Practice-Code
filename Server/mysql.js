var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "students_data"
});

con.connect(function(err){
  if(!err) {
    con.query("Select * from tblstudents", function(err, records){
      if(!err){
        console.log(records);
      }
    })
  }
})