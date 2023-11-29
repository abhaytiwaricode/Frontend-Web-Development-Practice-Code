var MongoClient  = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

var data = {
  StudentId: 4,
  Name: "Sandeep Mishra",
  FatherName: "Ramnath Mishra",
  Address: "Sultanpur, India"
}

MongoClient.connect(url, function(err, clientObj){
  if(!err) {
    var dbo = clientObj.db("students");
    dbo.collection("students_data").insertOne(data, function(err, result){
      if(!err) {
        console.log("Record Inserted");
      }
    })
  }
})