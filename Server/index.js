var http = require("http");

var app = http.createServer(function(request, response){
  response.writeHead(200, {
    "Content-Type": "application/json"
  })
  var responseMessage = [{Name: "iphone 15", Price: 80000.00},{Name: "iphone 15 Plus", Price: 90000.00}];
  response.write(JSON.stringify(responseMessage));
  response.end();
});
app.listen(8080);
console.log("Server Started : http://127.0.0.1:8080");
