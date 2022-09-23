// Day 2

const express = require("express")

const app = express();
const admin = require("./admin");
app.use("/admin",admin);

app.get("/", function (request, response) {
  response.send("<a href='http://localhost:5000/admin'>Admin Link</a>");
});

app.get("/test", function (request, response) {
  response.send("Get Link");
});

app.listen(5000);


