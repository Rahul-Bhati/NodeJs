// Day 1
const express = require("express")

const app = express();

app.get("/",function(request,response){
  response.send("Hello World");
});

app.listen(5000);
