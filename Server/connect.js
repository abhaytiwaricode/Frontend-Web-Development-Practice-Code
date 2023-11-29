const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";

async function retrieveStudentData() {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });

    const db = client.db("students");
    const collection = db.collection("students_data");

    const documents = await collection.find({Name: "Abhay Tiwari"}).toArray();
    console.log(documents);
    
    client.close();
  } catch (err) {
    console.error(err.message);
  }
}

retrieveStudentData();



// var mongoClient = require("mongodb").MongoClient;

// var url = "mongodb://127.0.0.1:27017";

// mongoClient.connect(url, function(err, clientObj){
//   if(!err) {
//    var dbo = clientObj.db("students");
//    dbo.collection("students_data").find({}).toArray(function(err, documents){
//     if(!err) {
//       console.log(documents);
//     } else {
//       console.log(err.message);
//     }
//    })
//   } else {
//     console.log(err.message);
//   }
// })