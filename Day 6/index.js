// Day 6 (Adding Static Files)

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./view");

app.use(express.static('public'));

app.get("/",function(request,response){
  response.render("demo2");
});

app.listen(5000);