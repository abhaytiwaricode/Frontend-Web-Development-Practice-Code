var express = require("express");
var cors = require("cors");

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());
app.use(cors());

app.listen(3030);
console.log("server started..");


// app.get("/", function(req, res){
//   res.send("Welcome to Web API")
// });

// app.get("/getproducts", function(req, res){
//   res.send("GET - Used to fetch all products.");
// });

// app.get("/getproducts/:id/:name", function(req, res){
//   res.send(`GET - to access specific product details : ${req.params.id} - ${req.params.name}`);
// });

// app.get("/c*t", function(req, res){
//   res.send("GET Request for Wild Card Route.");
// });

// app.post("/addproduct", function(req, res){
//   res.send("POST - to submit the data.")
// });