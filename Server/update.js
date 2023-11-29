var MongoClient  = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";

var findDocument = {Name: "Aman"};

var newValues = {$set:{FatherName: "Abhay Tiwari"}};

MongoClient.connect(url, function(err, clientObject){
  if(!err)
  {
    var dbo = clientObject.db("students");
    dbo.collection("students_data").updateOne(findDocument, newValues, function(err, result){
      if(!err){
        console.log("Record Updated..");
      } else {
        console.log(err.message);
      }
    });
  }
});