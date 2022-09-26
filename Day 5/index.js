// Day 5 (Send data to pug file from index.js file as object)

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./view");

app.get("/", function (request, response) {
  response.render("demo", {
    ename: "Rahul",
    salary: 120000000,
    mobile: "90023423492",
    exp : ["Tcs","Infosys","Wipro"]
  }); 
});

app.listen(5000);
