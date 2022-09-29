// Day 7 (Retrive Data from Form using POST and GET Method)

const express = require("express");
const app = express();
// use body parse for get data by post method  
const bodyParser = require("body-parser");
app.set("view engine", "pug");
app.set("views", "./view");
app.use(bodyParser.json()); // for post method bcs post me data direct json k formet m hota h
// for get/post method use urlencoded to encode data that we get from url
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (request, response) {
  response.render("Lec8");  // not retrive
});

app.get("/submit",function(request,response){
  // response.send(request.query);  // to get GET METHOD data use request.query
  // response.send(JSON.stringify(request.query)); // to convert get data in string
  console.log(request.query.roll);
  var student = JSON.parse(JSON.stringify(request.query));
  response.render("Lec8",{stud:student});
});
app.post("/submit", function (request, response) {
//  response.send("Record not found");
  response.send(request.body); // post m data json object hi hota h
  console.log(request.body);
  console.log(request.body.roll+" "+request.body.sname+" "+request.body.avg);
});

app.listen(5000);